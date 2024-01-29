
# Python Flask Example

A simple example for the Flask extention for Python.

## Features

This project includes:

- **Example Suburl:**
  - Demonstrates a simple website feature.
  - Contains an HTML file and a JavaScript file for extension purposes.

  To explore the webserver, navigate to `localhost:8890` in your web browser.
## Installation

To get started, follow these simple steps:

**Download the Project:**
   - Clone the project repository using Git:

     ```bash
     git clone [url]
     cd python-simple-flask-example
     ```

## Usage

Once you have the project downloaded, running the web server is easy:

**Run the Web Server:**
   - Execute the following command:

     ```bash
     python main.py
     ```
## Customization

### Editing Configuration

To customize the server properties, follow these steps:

- **Open the Configuration File:**
   - Locate the `config.txt` file in the root directory of the project.

- **Edit Server Properties:**
   - Modify the values in the file according to your requirements. Here's what you can adjust:
     - `port`: The port on which the Flask server listens. Default is `8890`.
     - `ip`: The IP address to bind the server to. Default is `0.0.0.0`.
     - `debug`: Whether to enable debug mode. Default is `True`. Set to `False` for production.

### Adding More Pages

To add additional pages to your project, follow these steps:

- Open the `lib/pages.py` file.

- Add the following code snippet:

    ```python
    @bp.route("/your/url/here", methods=["GET"])
    def your_function_for_the_url():
        return render_template("html_located_in_static.html") # For an HTML file
        return "Your text" # For raw text
    ```

    Replace `"/your/url/here"` with the desired URL endpoint for your new page.

 *You can choose to either render an HTML file or return raw text by modifying the `render_template` function or the return statement accordingly.*

### Adding References to JavaScript or CSS Files

When referencing JavaScript or CSS files in an HTML file, use the following attribute:

```html
src="static/your/file.js"
```

Replace `"your/file.js"` with the path to your JavaScript or CSS file located in the `static` directory.