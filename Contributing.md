#To Contribute

This is based on https://www.geeksforgeeks.org/how-to-connect-django-with-reactjs/ with my changes

Setting up Backend:
Install virtual env "env"
cd into env
activate the venv
pip install django
pip install djangorestframework
pip install django-cors-headers
django-admin startproject backend
cd backend
django-admin startapp habittracker

python manage.py makemigrations 
python manage.py migrate  
python manage.py runserver


Setting up Frontend:
npx create-react-app frontend
cd frontend
npm install react-bootstrap@next bootstrap@5.1.0
npm install axios


from there get the stuff from this repo
