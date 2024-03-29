import React from 'react';
import Card from './Card';

const Cardassembler = ({ robots }) => {
    

    return (
        <div>
            {
                robots.map((x,i) => {
                    return (
                        <Card 
                            key = {i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                            />
                    );
                })
            }
        </div>
    )
}

export default Cardassembler;