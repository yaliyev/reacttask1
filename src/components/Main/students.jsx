import List from '../List/list';
import ListItem from '../List/list-item';
import { students } from '../../student';
function Students() {
    return (
        <>

            <List>
                {
                    students.map((student)=>{
                    return  <ListItem key={student.id}>{student.name}</ListItem>
                    })
                }
                
            </List>
        </>
    )
}
export default Students