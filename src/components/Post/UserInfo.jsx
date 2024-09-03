import moment from 'moment';
import React from 'react'
import { MdEdit } from 'react-icons/md';

//* kullanıcı isminden yola çıkarak bir nickname oluşturduk
const UserInfo = ({ tweet }) => {
    const username = tweet.user.name.toLowerCase().replace(/ /g, "_")
    + Math.round(Math.random() * 99);

    //* tarih
    let date = tweet.createdAt?.toDate();
//* moment kütüphanesiyle şuanki tarihten uzaklığı hesapla
    date = moment(date).fromNow();
  return (
    <div className='flex gap-3 items-center whitespace-nowrap'>
        <p>{tweet.user.name}</p>
        <p className='text-gray-400 text-sm'>@{username}</p>
        <p className='text-gray-400 text-sm'>{date}</p>
        {tweet.isEdited && (
            <p className='text-gray-400 text-xs'>
                <MdEdit className='md:hidden'/>
                <span className='max-md:hidden'>*düzenlendi</span>
            </p>
        )}
    </div>
  )
}

export default UserInfo