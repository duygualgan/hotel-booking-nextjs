import { pb } from "@/lib/pocketbase";


export  async function getHotel() {
    try {

        const record = await pb.collection('hotel').getOne('tbmv9tc6z5tqh6j', {
            expand: 'relField1,relField2.subRelField',
        });

        return record;
        
    } catch (error) {
        console.error('Error getting slider images:', error);
        return [];
        
    }
    
}