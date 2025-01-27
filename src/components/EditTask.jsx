/* eslint-disable react/prop-types */
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/taskSlice';

const EditTask = ({ task }) => {
    const [edit,setEdit] = useState(false)
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);
    const dispatch = useDispatch();

    const handleEdit = () =>{
        dispatch(editTask({id: task.id,title,description,status}))
        setEdit(false)
    }
  return (
    <div>
        {edit ? (
        <div className='absolute bg-white p-4 border rounded-md shadow-lg z-10'>
        <h2 className="text-xl font-semibold mb-3 text-indigo-500">
        Edit Task
      </h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-md 
        focus:outline-none focus:ring-2 focus:ring-indigo-400 "
          required
        ></input>
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Test Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border rounded-md 
        focus:outline-none focus:ring-2 focus:ring-indigo-400"
          rows="3"
        ></textarea>
      </div>
      <div className="mb-4">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full px-3 py-2 border rounded-md 
        focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="flex justify-between">
      <button
        type="submit"
        className="bg-indigo-600 text-white py-2 rounded-md px-2 hover:bg-indigo-700" 
        onClick={handleEdit}>
        Save
      </button>
      <button className='bg-gray-300 rounded-md py-2 px-2'  onClick={()=>setEdit(false)}>Cancel</button>
      </div>
     </div>
        ): (<>
            <button
        className="px-3 py-1 bg-blue-500  text-white  rounded-md hover:bg-red-600" 
        onClick={()=>setEdit(true)}
        >
        Edit
      </button>
        </>)}
      
    </div>
  );
};

export default EditTask;
