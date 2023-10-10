ARG REPOSITORY="docker.io"
FROM python:3.8-bookworm

ADD requirements.txt .
RUN pip3 install --upgrade pip && pip3 install -r requirements.txt

RUN mkdir /upload_files
ADD upload_files upload_files
EXPOSE 1271
CMD ["python3.8", "./upload_files/main.py"]