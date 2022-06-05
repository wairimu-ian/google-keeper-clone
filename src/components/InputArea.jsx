import React, {useState} from "react";

const InputArea = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    const handleChange = (event) => {
        const {name, value} = event.target;
        setNote((preValue) => {
            if (name === "title") {
                return {
                    title: value,
                    content: preValue.content
                };
            }else if (name === "content") {
                return {
                    title: preValue.title,
                    content: value
                };
            }
        })
    }
    return (
        <>
            <form onSubmit={(e) => {e.preventDefault()}}>
                <input name="title"  onChange={handleChange} value={note.title} placeholder="Title" />
                <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
                <button onClick={() => {
                    props.click(note)
                    setNote(() => {
                        return {
                            title: "",
                            content: ""
                        };
                    })
                }}>Add</button>
            </form>
        </>
    );
}

export default InputArea