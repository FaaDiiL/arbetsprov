
# SEARCH TICKER

SEARCH TICKER is a Ticker Symbol search engine that provides you with a Graph that show you the the end price for the ticker you search for.


## Features
- Responsive
- Data from API
- Error handling
- Cross platform
- Testing (Jest)


## Demo

- [DEMO](http://arbetsprovgraph.surge.sh) - Try it Live





## Screenshots

<img src="https://user-images.githubusercontent.com/18538595/167317267-5ba5c20c-14b8-4f9c-9df3-f476f4b4c76c.png" width="45%"></img>
<img src="https://user-images.githubusercontent.com/18538595/167317300-284ee2ec-0d3d-4c1b-9ed1-e25f4f97a671.png" width="45%"></img>
<img src="https://user-images.githubusercontent.com/18538595/167317330-970ed394-a5e2-4680-adc3-57146883a1ac.png" width="45%"></img>
<img src="https://user-images.githubusercontent.com/18538595/167317359-88ffb6a2-5efd-4ebf-8d9e-c07162c3eabe.png" width="45%"></img>
<img src="https://user-images.githubusercontent.com/18538595/167317380-4c32d3c1-cb33-467c-8fd0-482af9d006b3.png" width="45%"></img> 

## API Reference

#### Base url

```http
  GET https://data.nasdaq.com
```

#### Get all items

```http
  GET /api/v3/datasets/${database_code}/${dataset_code}/data.{return_format}
```

##### Example
```http
  GET /api/v3/datasets/${database_code}/${dataset_code}/data.{return_format}
```

| Parameter       | Required | Type     | Description                                                                                |
| :-------------- | :------- | :------- | :--------------------------------------------------------------------------------------    |
| `api_key`       | Yes      | `string` | Your API key                                                                               |
| `database_code` | Yes      | `string` | Code identifying the database to which the dataset belongs.                                |
| `dataset_code`  | Yes      | `string` | Code identifying the dataset.                                                              |
| `limit`         | no       | `int`    | Use limit=n to get the first n rows of the dataset. Use limit=1 to get just the latest row.|

```json
{
   "dataset_data":{
      "limit":3,
      "transform":null,
      "column_index":4,
      "column_names":[
         "Date",
         "Close"
      ],
      "start_date":"2012-05-18",
      "end_date":"2018-03-27",
      "frequency":"daily",
      "data":[
         [
            "2018-03-31",
            152.19
         ],
         [
            "2018-02-28",
            178.32
         ],
         [
            "2018-01-31",
            186.89
         ]
      ],
      "collapse":"monthly",
      "order":"desc"
   }
}
```

#### fetchTickerDatasetBySymbol("FB")

Takes a ticker-sybmol of Type("string") and returns a json response like the one above.

#### You can read more about the API on the links below

- [Time-series Parameters](https://docs.data.nasdaq.com/docs/parameters-2)
- [Time-series Usage](https://docs.data.nasdaq.com/docs/in-depth-usage)
## Deployment

To deploy this project, you need to have surge installed. See (step 1)
If you have surge installed skip this step and continue to (step 2)

#### Step 1

```bash
    npm install surge
```

Go to the public-folder and open the CNAME-file and Change the CNAM you like to have
- xxxx.surge.sh
- ex. Testing.surge.sh
or leave it empty to let surge auto generate one for you on deployment.

#### Step 3

This step will build the app and deploy it for you.

```bash
    npm run deploy
```
After the script has finished running, just click on the link to get to the website.
## Authors

- [@Fadil Al](https://www.github.com/FaaDiiL)

## Badges

[![npm version](https://camo.githubusercontent.com/4e4a3b5c3e9c00501ec866e2f2466c5a6032f838aca5f2cf3b14450e39e8a2f0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742532302d2532333230323332612e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642)](https://reactjs.org/)

[![npm version](https://badge.fury.io/js/node.svg)](https://badge.fury.io/js/node)

[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

