import os
from dotenv import load_dotenv

base_dir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(base_dir, '.env'))

class Config(object):
    # DEBUG = True
    # TESTING = False
    # CSRF_ENABLED = True
    SECRET_KEY = b'\xed`\x0c\xcc\x8e`U\x84\xb8Xs\xbd\xfe\xcf\xfd\xb6'
    #SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URI') or 'mysql+pymysql://root:@127.0.0.1:3306/musixent'
    HEROKU_BUILDPACK_GIT_LFS_REPO = "https://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@github.com/Fiifi1/musixent.git"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URI') or 'mysql+pymysql://musixent_admin:musixent_pwd@www.db4free.net:3306/musixent'

class ProductionConfig(Config):
    DEBUG = False

class DevelopmentConfig(Config):
    ENV = "development"
    DEVELOPMENT = True

