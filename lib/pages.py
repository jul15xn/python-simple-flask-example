from flask import Blueprint, render_template
import os

bp = Blueprint("pages", __name__)

@bp.route("/")
def home():
    return render_template("home.html")

@bp.route("/about")
def about():
    return "aboutpage"