from flask import Flask, render_template, request, send_file


class File:
    def __init__(self):
        self.name = ""


app = Flask(__name__)
img = File()


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/upload", methods=["POST", "GET"])
def upload():
    if request.method == "POST":
        f = request.files["file"]
        img.name = f.filename
        f.save(img.name)
        return {}
    elif request.method == "GET":
        img_suf = img.name.split('.')[-1]
        return send_file(img.name, f"image/{img_suf}")
