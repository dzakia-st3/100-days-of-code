import React, {useState} from 'react'
import './style.css'


const BirthdayReminder = () => { 
    const data = [
        {
            name: 'Bertie Yates',
            age: '29 years',
            image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg'
        },
        {
            name: 'Hester Hogan',
            age: '32 years',
            image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg'
        },
        {
            name: 'Larry Little',
            age: '36 years',
            image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg'
        },
        {
            name: 'Sean Walsh',
            age: '34 years',
            image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'
        },
        {
            name: 'Lola Gardner',
            age: '29 years',
            image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg'
        }
    ]
    
    const [dataPerson, setDataPerson] = useState(data)
    console.log(dataPerson, 'cek data')

    const handleDelete = () => {
        setDataPerson(null)
    }

    const handleRefresh = () => {
        setDataPerson(data)
    }

    return (
        <div className='container'>
            <div className='sub-container'>
                {dataPerson !== null ? (<h2 className='text-brithday'>{`${dataPerson.length} Birthday Today`}</h2>) : (<h2 className='text-birthday'>0 Birthday Today</h2>)}
                {dataPerson !== null ? (
                    <>
                    {dataPerson?.map((item) => {
                    return (
                        <div className='sub-person'>
                            <img className='profil' src={item.image} />
                            <div className='profile-text'>
                                <p>{item.name}</p>
                                <p>{item.age}</p>
                            </div>
                        </div>
                    )
                })}
                <button className='birthday-button' onClick={handleDelete}>Clear All</button>
                </>
                ) : (<button className='birthday-button' onClick={handleRefresh}>0 Birthday Today</button>)}
            </div>
        </div>
    )
}

export default BirthdayReminder