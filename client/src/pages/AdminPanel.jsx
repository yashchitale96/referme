import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPanel = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [editFields, setEditFields] = useState({});
  const [deletingId, setDeletingId] = useState(null);

  // Fetch all notes on mount
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://referme-a5hucfc6a8bccdhq.centralindia-01.azurewebsites.net/getpdfs');
      setNotes(res.data);
    } catch (err) {
      toast.error('Failed to fetch notes');
    }
    setLoading(false);
  };

  const handleEdit = (note) => {
    setEditId(note._id);
    setEditFields({ ...note });
  };

  const handleEditChange = (e) => {
    setEditFields({ ...editFields, [e.target.name]: e.target.value });
  };

  const handleEditSave = async () => {
    try {
      await axios.put(`https://referme-a5hucfc6a8bccdhq.centralindia-01.azurewebsites.net/pdf/${editId}`, editFields, { withCredentials: true });
      toast.success('Note updated');
      setEditId(null);
      fetchNotes();
    } catch (err) {
      toast.error('Failed to update note');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this note?')) return;
    setDeletingId(id);
    try {
      await axios.delete(`https://referme-a5hucfc6a8bccdhq.centralindia-01.azurewebsites.net/pdf/${id}`, { withCredentials: true });
      toast.success('Note deleted');
      setNotes(notes.filter((n) => n._id !== id));
    } catch (err) {
      toast.error('Failed to delete note');
    }
    setDeletingId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Admin Panel: Manage Uploaded Notes</h2>
        {loading ? (
          <div className="text-white">Loading...</div>
        ) : (
          <div className="overflow-x-auto bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-xl">
            <table className="min-w-full divide-y divide-purple-400">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-purple-200">Year</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-purple-200">Branch</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-purple-200">Semester</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-purple-200">Subject</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-purple-200">Type</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-purple-200">Subtype</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-purple-200">PDF</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-purple-200">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-300">
                {notes.map((note) => (
                  <tr key={note._id} className="hover:bg-purple-900/20">
                    {editId === note._id ? (
                      <>
                        <td className="px-3 py-2"><input name="year" value={editFields.year} onChange={handleEditChange} className="w-20 p-1 rounded" /></td>
                        <td className="px-3 py-2"><input name="branch" value={editFields.branch} onChange={handleEditChange} className="w-20 p-1 rounded" /></td>
                        <td className="px-3 py-2"><input name="semester" value={editFields.semester} onChange={handleEditChange} className="w-20 p-1 rounded" /></td>
                        <td className="px-3 py-2"><input name="subject" value={editFields.subject} onChange={handleEditChange} className="w-24 p-1 rounded" /></td>
                        <td className="px-3 py-2"><input name="type" value={editFields.type} onChange={handleEditChange} className="w-20 p-1 rounded" /></td>
                        <td className="px-3 py-2"><input name="subtype" value={editFields.subtype} onChange={handleEditChange} className="w-20 p-1 rounded" /></td>
                        <td className="px-3 py-2"><a href={note.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">View</a></td>
                        <td className="px-3 py-2 flex gap-2">
                          <button onClick={handleEditSave} className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded">Save</button>
                          <button onClick={() => setEditId(null)} className="bg-gray-600 hover:bg-gray-700 text-white px-2 py-1 rounded">Cancel</button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-3 py-2 text-white">{note.year}</td>
                        <td className="px-3 py-2 text-white">{note.branch}</td>
                        <td className="px-3 py-2 text-white">{note.semester}</td>
                        <td className="px-3 py-2 text-white">{note.subject}</td>
                        <td className="px-3 py-2 text-white">{note.type}</td>
                        <td className="px-3 py-2 text-white">{note.subtype}</td>
                        <td className="px-3 py-2"><a href={note.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">View</a></td>
                        <td className="px-3 py-2 flex gap-2">
                          <button onClick={() => handleEdit(note)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded">Rename</button>
                          <button onClick={() => handleDelete(note._id)} className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded" disabled={deletingId === note._id}>{deletingId === note._id ? 'Deleting...' : 'Delete'}</button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
            {notes.length === 0 && <div className="text-white py-8 text-center">No notes found.</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel; 