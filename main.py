import os
import sys

from flask import Flask, render_template, Blueprint, request, Response

app = Flask(
    __name__,
    template_folder=os.path.join(os.path.dirname(__file__), "templates"),
    static_folder=os.path.join(os.path.dirname(__file__), "gui/build/static")
)
#  built settings
if getattr(sys, 'frozen', False):
    template_folder = os.path.join(sys._MEIPASS, 'templates')
    static_folder = os.path.join(sys._MEIPASS, "static")
    app = Flask(__name__, template_folder=template_folder, static_folder=static_folder)

bp = Blueprint("index", __name__)


@bp.route("/", methods=("GET", "POST"))
def index():
    if request.method == "GET":
        return render_template("base.html", flask_token="HelloWorld")


app.register_blueprint(bp)

if __name__ == "__main__":
    app.run()
