# Simple-Nodejs
This is just a webpage made using simple javascript and bootstrap.
Uses Nodejs as backend
Reads a JSON file in the server.
Data is sent to a client side script using a POST request.

#Storage
Ping_Data.json:

This part needs to be done manually.

Each time there is new data in the json file, you will need to do the following:

* The main structure is  [{'Sno1': data1, 'Sno2': data2}]
* Each new append does not remove the ending ']' or does it add any ','
* That must be done manually. Also Once a '.html' is requested any appends to Ping_Data.json
will not cause the server to crash.
* Everything else works just fine.

What we found:

Android
* LTE to WiFi handovers and vice versa caused IP leaks

Windows
* Powershell pinging (HTTP requests without TCP [FIN] packets) leaked immensely
* python script pinging (normal HTTP requests) did not leak.

Setting Up NoIP from the website will prove useful if you do not want to pay for a DNS service:
https://www.noip.com/

Remember to forward your server port in your router settings.

This will ensure that Network Address Translation (NAT) doesn't get you down.
