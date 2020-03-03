import React from "react";

const Input = ({ value, onChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Choose a city"
        />
        <button type="submit">Send</button>
    </form>
);

export default Input;
