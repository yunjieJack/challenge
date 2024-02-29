import './App.css';
import React, {useState, useEffect} from "react";
import {ConfigProvider, theme} from "antd";
import TableArea from './component/TableArea/TableArea'
import SearchActions from "./component/SearchActions/SearchActions";
import {DataType} from "./component/TableArea/const/const";

let apiPath = '/api/data'

const fetchData = async (params: {[props: string]: string}) => {
    let url = apiPath, paraArr: string[] = []
    Object.keys(params).forEach((key: string) => {
        paraArr.push(`${key}=${params[key]}`)
    })
    if (paraArr.length > 0) {
        url += `?${paraArr.join('&')}`
    }
    const data = await fetch(url)
    let list: DataType[] = []
    if (data.ok) {
        list = await data.json()
    }
    return list
}

const App : React.FC = () => {
    const [data, setData] = useState([] as DataType[])
    const [params, setPara] = useState({})
    useEffect(() => {
        fetchData(params).then(res => {
            setData(res)
        })
    },[params]);

    const search = (val: any) => {
        setPara({
            ...params,
            ...val
        })
    }
  return (
      <ConfigProvider
          theme={{
              algorithm: theme.darkAlgorithm
          }}
      >
          <div>
              Mobile Food Facility Permit
              <SearchActions
                search={search}
              />
              <TableArea
                  dataSource={data}
              />
          </div>
      </ConfigProvider>
  );
}

export default App;
