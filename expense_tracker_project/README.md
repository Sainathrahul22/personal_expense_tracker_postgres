🧾 Personal Expense Tracker

A Django-based web application for tracking personal expenses 💰.
Originally built with SQLite, now upgraded to use PostgreSQL for better scalability and reliability.

🚀 Features

✅ Add, edit, and delete expenses

✅ Categorize expenses

✅ View all expenses in a clean interface

✅ Authentication (login & register)

✅ Secure token-based API (Django Rest Framework)

🛠 Tech Stack

Backend: Django, Django Rest Framework

Database: PostgreSQL (previously SQLite)

Frontend: HTML, CSS, Django Templates

Authentication: Django Auth + DRF Authtoken

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/your-username/personal_expense_tracker_postgres.git
cd personal_expense_tracker_postgres

2️⃣ Create a Virtual Environment
python -m venv expense_env
expense_env\Scripts\activate   # On Windows
source expense_env/bin/activate  # On Mac/Linux

3️⃣ Install Dependencies
pip install -r requirements.txt

4️⃣ Configure Database

In expense_tracker_project/settings.py, update:

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'expense_db',
        'USER': 'expense_user',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

5️⃣ Run Migrations
python manage.py makemigrations
python manage.py migrate

6️⃣ Create Superuser
python manage.py createsuperuser

7️⃣ Start Development Server
python manage.py runserver


App will be available at 👉 http://127.0.0.1:8000

📌 Notes

Old SQLite database is no longer used.

PostgreSQL must be installed and running on your machine.

Keep your database credentials safe.

📸 Screenshots (Optional)

(Add screenshots here later if you want!)

🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📜 License

This project is licensed under the MIT License.