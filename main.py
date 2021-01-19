import os

from flask import Flask, render_template, Blueprint, request, Response

app = Flask(
    __name__,
    template_folder=os.path.join(os.path.dirname(__file__), "templates"),
    static_folder=os.path.join(os.path.dirname(__file__), "gui/build/static")
)

bp = Blueprint("index", __name__)


@bp.route("/", methods=("GET", "POST"))
def index():
    if request.method == "GET":
        return render_template("base.html")


app.register_blueprint(bp)

if __name__ == "__main__":
    app.run()
