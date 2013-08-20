#!/usr/bin/env bash
apt-get update
apt-get install -y vim make g++
wget http://nodejs.org/dist/v0.10.12/node-v0.10.12.tar.gz
tar -xvf node-v0.10.12.tar.gz
rm node-v0.10.12.tar.gz
cd node-v0.10.12/
./configure
make
sudo make install
rm -rf /var/www
ln -fs /vagrant /var/www
cd /vagrant
npm install -g grunt-cli
# cp RealEstateManagement /etc/nginx/sites-enabled/
# sudo service nginx restart