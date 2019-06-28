import axios from 'axios';
import React from 'react';

export const BugForm = ({
  isEdit,
  id,
  name,
  setName,
  title,
  setTitle,
  status,
  setStatus,
  onSuccess,
  reset
}) => {
  function submit() {
    if (isEdit) {
      axios
        .put(`https://bugbook-server.herokuapp.com/bugs/${id}`, {
          title,
          status,
          reportedBy: name
        })
        .then(() => onSuccess());
    } else {
      axios
        .post('https://bugbook-server.herokuapp.com/bugs', {
          title,
          status,
          reportedBy: name
        })
        .then(() => onSuccess());
    }
  }

  return (
    <div className="card">
      <form
        id="bug-form"
        onSubmit={e => {
          e.preventDefault();
          submit();
        }}
      >
        <input type="hidden" name="id" id="id" />
        <div className="card-title">
          {isEdit ? 'Edit Issue' : 'Create Issue'}
        </div>
        <div className="card-content">
          <div className="form-control">
            <label htmlFor="reportedBy">Your Name</label>
            <input
              value={name}
              onChange={ev => setName(ev.target.value)}
              id="reportedBy"
              name="reportedBy"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="title">Issue Title</label>
            <input
              value={title}
              onChange={ev => setTitle(ev.target.value)}
              id="title"
              name="title"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="status">Status</label>
            <select
              value={status}
              onChange={ev => setStatus(ev.target.value)}
              id="status"
              name="status"
              required
            >
              <option value="" />
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
            </select>
          </div>
        </div>
        <div className="card-actions">
          <button type="submit" className="btn">
            {isEdit ? 'Save' : 'Create'}
          </button>
          <button onClick={reset} type="reset" className="btn btn-white">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export const BugList = ({ onSelect, bugs }) => {
  return (
    <div id="bugs-container">
      {bugs.map(bug => (
        <article onClick={() => onSelect(bug)} className="card" key={bug.id}>
          <div className="card-title">{bug.status}</div>
          <div className="card-content">
            <p>{bug.title}</p>
            <i>Reported by {bug.reportedBy}</i>
          </div>
        </article>
      ))}
      {bugs.length === 0 && <div className="spinner" />}
    </div>
  );
};

export const BugPage = () => {
  const [bugs, setBugs] = React.useState([]);
  const loadBugs = () =>
    axios
      .get(`https://bugbook-server.herokuapp.com/bugs`)
      .then(res => setBugs(res.data));
  React.useEffect(() => {
    loadBugs();
  }, []);

  const [name, setName] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [isEdit, setIsEdit] = React.useState(false);
  const [id, setId] = React.useState(undefined);

  function reset() {
    setName('');
    setTitle('');
    setStatus('');
    setId(undefined);
    setIsEdit(false);
  }

  function selectBug(bug) {
    setName(bug.reportedBy);
    setTitle(bug.title);
    setStatus(bug.status);
    setIsEdit(true);
    setId(bug.id);
  }

  function onSuccess() {
    loadBugs();
    reset();
  }

  return (
    <main className="container">
      <BugList bugs={bugs} onSelect={selectBug} />
      <div id="bug-form-container">
        <BugForm
          isEdit={isEdit}
          id={id}
          name={name}
          title={title}
          status={status}
          setName={setName}
          setTitle={setTitle}
          setStatus={setStatus}
          reset={reset}
          onSuccess={onSuccess}
        />
      </div>
    </main>
  );
};
