FROM python:3.10-alpine

COPY ./requirements.txt /tmp
COPY ./src /app

RUN pip install -r /tmp/requirements.txt

WORKDIR /app

CMD python /app/app.py