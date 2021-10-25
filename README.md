# Generate Country Message File in JSON Format

## Description

This code takes a JSON file as input
```
[
  {
    "nome_pais": "Afeganistão",
    "nome_pais_int": "Afghanistan"
  },
]
```

And generate a json file with the above structure and format

```
{
  "Afghanistan": {
    "id":"DataSections.ResidenceData.Afghanistan",
    "defaultMessage":"Afeganistão"
  },
  ...
}
```

## What you need to run

- NodeJS

## How to run

You just need to execute the following command line in the root directory of this project

`node index.js`

The output file result could be found at the same directory.
