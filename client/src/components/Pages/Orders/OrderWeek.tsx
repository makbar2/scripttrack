import { useEffect, useState,} from "react";
import FormAlert from "@/components/FormAlert";
import Patient from "../../../Interfaces/Patient";
import PatientTable from "../../PatientTable";
import formatDate from "@/utils/formatDate";
import { useTitle } from "@/contexts/DashboardTitleContext";

export default function OrderToday()
{
    const [patients, setPatients] = useState<Patient[]>([]);
    const setTitle = useTitle();
    const [responseMessage, setResponseMessage] = useState({
        type: "",
        message: ""
    }); 
    useEffect(()=>{
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const year = today.getFullYear();
        setTitle(`Orders for  ${day}-${month}-${year}`);
        async function getOrders() {
            const response = await fetch(`https://localhost:7295/patients/orders`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },

            });
            if(response.ok)
            {   
                const data = await response.json();
                console.log(data);
                const result: Patient[] = data.map((i : Patient) => ({
                    id: i.id,
                    firstName: i.firstName,
                    surname: i.surname,
                    address: i.address,
                    postcode: i.postcode,
                    dob: i.dob,
                    orderDate : formatDate(i.orderDate,false),
                    collectionDate : formatDate(i.collectionDate,false),
                }));//todo: change the patient search to do this, or not it doesnt matter does the same thing
                //meds not included, to increase preformance, when the user opens the dialog  i will return the medication list
                setPatients(result);
                console.log(result);
            }else if(response.status === 404)
            {

                setResponseMessage({
                    type : "error",
                    message : "There are no orders for this week"
                });
            }else{
                
                setResponseMessage({
                    type : "error",
                    message : "Unable to connect to the backend"
                });
            }
        }
        getOrders();
        
    },[setTitle]);
    return(
        <>
            <h1>This Weeks Orders</h1>
            {
                responseMessage.type !== "" ?
                    <FormAlert type={responseMessage.type} message={responseMessage.message}/>
                    :
                    <PatientTable mode={1} patients={patients}  setPatients={setPatients} />
            }
        </>
    );
}


