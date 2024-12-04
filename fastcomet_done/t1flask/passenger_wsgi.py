import os
import sys

# Ensure the application directory is in the Python path
sys.path.insert(0, os.path.dirname(__file__))

from app import app as application
