#!/usr/bin/env python
import webapp2
import jinja2
import os

jinja_environment = jinja2.Environment(
  loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))# this little bit sets jinja's relative directory to match the directory name(dirname) of the current __file__, in this case, helloworld.py

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('/templates/index.html')
        self.response.out.write(template.render())

app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)
