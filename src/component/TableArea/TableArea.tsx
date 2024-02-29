import React from "react";
import {Table} from "antd";
import {columns, DataType} from './const/const'

const TableArea: React.FC<{dataSource : DataType[]}> = ({dataSource}) => {
    return (
        <Table
            columns={columns}
            dataSource={dataSource.map((data: DataType) => ({
                ...data,
                key: data.locationid
            }))}
            pagination={false}
        />
    )
}

export default TableArea