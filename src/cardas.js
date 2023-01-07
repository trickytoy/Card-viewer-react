import React from 'react';
import Card from './Card';

const Cardassembler = ({ user }) => {
    

    return (
        <div>
            {
                user.map((x,i) => {
                    return (
                        <Card 
                            key = {i} 
                            id={user[i].id} 
                            name={user[i].name} 
                            email={user[i].email}
                            />
                    );
                })
            }
        </div>
    )
}

export default Cardassembler;