import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import css from './style.css';

function PlaintextEditor({ file, write }) {
  const [text, setText] = useState('');

  useEffect(() => {
    (async () => {
      setText(await file.text());
    })();
  }, [file]);

  console.log(file, write);
  return (
    <div>
      <textarea className={css.editor} defaultValue={text} onChange={(event) => setText(event.target.value)}/>
      <button type='submit' onClick={() => {console.log([text], file.name, file.type, file.lastModified); write(new File([text], file.name, { type: file.type, lastModified: Date.now() })); } }>Save</button>
    </div>
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;
