import json
import os
import sys
from io import BytesIO

from flask import Flask, render_template, Blueprint, request, jsonify
from flask_cors import CORS, cross_origin
from openpyxl.utils.exceptions import InvalidFileException

from backend.lib import get_excel_preview_data, TooManySheetsException, reorder_data
from backend.xlsx2reqif import convert_file

INVALID_FILE_ERROR = "Invalid file format, please choose a valid Excel spreadsheet. Supported formats are: .xlsx,.xlsm,.xltx,.xltm."

app = Flask(
    __name__,
    template_folder=os.path.join(os.path.dirname(__file__), "templates"),
    static_folder=os.path.join(os.path.dirname(__file__), "static")
)

app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"/": {"origins": "*"}})

#  built settings
if getattr(sys, 'frozen', False):
    template_folder = os.path.join(sys._MEIPASS, '../templates')
    static_folder = os.path.join(sys._MEIPASS, "../static")
    app = Flask(__name__, template_folder=template_folder, static_folder=static_folder)

bp = Blueprint("index", __name__)


@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
@bp.route("/", methods=("GET", "POST"))
def index():
    if request.method == "GET":
        return render_template("base.html")
    elif request.method == "POST":
        if request.files and request.files.get("file"):
            excel_file = request.files.get("file")
            excel_data = BytesIO(excel_file.read())
            headers = request.form.get("headers")
            if headers:
                headers = json.loads(headers)
                reordered_data = reorder_data(excel_data, headers)
                file_data = convert_file(BytesIO(reordered_data), excel_file.filename, save_file=True)
                return jsonify({"reqif": file_data})
            try:
                data = get_excel_preview_data(excel_data)
                return jsonify({"data": data})
            except InvalidFileException:
                return jsonify({"error": INVALID_FILE_ERROR}), 400
            except TooManySheetsException as e:
                return jsonify({"error": e.args[0]}), 400


app.register_blueprint(bp)

if __name__ == "__main__":
    app.run()
