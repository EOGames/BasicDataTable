import GetData from '../api/getdata.api';
import { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";


const Database = () => {
    const [receivedData, setreceivedData] = useState([]);
    const getData = async () => {
        let data = await GetData();
        if (data?.data?.userData) {

            data = data.data.userData;
            console.log('Data Fetched------------------->', data);
            setreceivedData(...receivedData, data);
        }

    }

    const options = {
        filterType: 'checkbox',
        selectableRowsHideCheckboxes : true,
        responsive	:"simple",


    }

    useEffect(() => {
        getData();
    }, []);

    const columns = [
        {
            name: "_id",
            label: "Id",
            options: {
                filter: true,
                sort: true,      
                setCellHeaderProps: value => ({ style: {backgroundColor:'skyblue',borderRadius: '10px 0% 0% 0%'} }),
          
            }
        },
        {
            name: "name",
            label: "Name",
            options: {
                filter: true,
                sort: true,   
                setCellHeaderProps: value => ({ style: {backgroundColor:'skyblue'} }),

            }
        },
        {
            name: "email",
            label: "Email Id",
            options: {
                filter: true,
                sort: false,
                setCellHeaderProps: value => ({ style: {backgroundColor:'skyblue'} }),

            }
        },
        {
            name: "phone",
            label: "Phone No.",
            options: {
                filter: true,
                sort: true,
                setCellHeaderProps: value => ({ style: {backgroundColor:'skyblue',borderRadius: '0% 10px 0% 0%'} }),

            }
        },

    ];


    return (
        <div className='tableHandler'>
            {
                console.log('Rendering in Table---------------------------------', receivedData)
            }

            <MUIDataTable
                title={"Employee List"}
                data={receivedData}
                columns={columns}
                options={options}
            />
        </div>
    );
}
export default Database;