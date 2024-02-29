import {Tag } from "antd";
import {CloudDownloadOutlined} from '@ant-design/icons'
import type {ColumnsType} from "antd/es/table";

export interface DataType {
    [props: string]: string
}


const getColor: (type: string) => string = type => {
    switch (type) {
        case 'REQUESTED':
            return 'gold';
        case 'EXPIRED':
            return 'red';
        case 'SUSPEND':
            return 'cyan'
        case 'APPROVED':
            return 'green'
        case 'ISSUED':
            return 'geekblue'
        default:
            return 'lime'
    }
}

const getTime: (timeStr: string) => string = timeStr => {
    const date: Date = new Date(timeStr)
    if (isNaN(date.getTime())) {
        return timeStr
    } else {
        return date.toDateString()
    }
}

export const columns: ColumnsType<DataType> = [
    {
        key: 'Applicant',
        title: 'Applicant',
        dataIndex: 'Applicant'
    }, {
        key: 'FacilityType',
        title: 'Facility Type',
        dataIndex: 'FacilityType'
    }, {
        key: 'Status',
        title: 'Status',
        dataIndex: 'Status',
        render: (text) => <Tag color={getColor(text)}>{text}</Tag>
    }, {
        key: 'Permit Data',
        title: 'Permit Data',
        dataIndex: 'Permit Data',
        width: 200,
        render: (_, rowData) => {
            const nodes = []
            if (rowData.ExpirationDate) {
                nodes.push(
                    <div>
                        <Tag color='red'>E</Tag> {getTime(rowData.ExpirationDate)}
                    </div>
                )
            }
            if (rowData.Received) {
                nodes.push(
                    <div>
                        <Tag color='geekblue'>R</Tag>{getTime(rowData.Received)}
                    </div>
                )
            }
            if (rowData.Approved) {
                nodes.push(
                    <div>
                        <Tag color='green'>A</Tag> {getTime(rowData.Approved)}
                    </div>
                )
            }

            return nodes
        }
    }, {
        key: 'FoodItems',
        title: 'FoodItems',
        dataIndex: 'FoodItems'
    }, {
        key: 'Schedule',
        title: 'Schedule',
        dataIndex: 'Schedule',
        render: (path) => {
            return <a download='Schedule.pdf' href={path} target='_blank' rel='noreferrer'><CloudDownloadOutlined /></a>
        }
    }
]