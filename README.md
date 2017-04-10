# timestamp-microservice
Returns unix timestamps and natural language dates of date inputs. 
```
Example usage:
GET [hostname]/December%2015,%202015
GET [hostname]/1450137600
Example output:
{ "unix": 1450137600, "natural": "December 15, 2015" }
```
