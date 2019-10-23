import React from 'react';



const Personal = ({
    setController,
    user,
    setUser
}) => {
    return (
        <div className="personal-page">
            <form className="form" onSubmit={(event) => {
                event.preventDefault();
                setController({ steps: 1 })
            }}>
                <label forhtml="FirstName">First Name</label>
                <input
                    name="FirstName"
                    value={user.FirstName}
                    onChange={({ target }) => setUser({ FirstName: target.value })}
                />

                <label forhtml="LastName">Last Name</label>
                <input
                    name="LastName"
                    value={user.LastName}
                    onChange={({ target }) => setUser({ LastName: target.value })}
                />

                <label forhtml="Email">Email</label>
                <input
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={({ target }) => setUser({ email: target.value })}
                />

                <label forhtml="phoneNumber">Phone Number</label>
                <input
                    name="phoneNumber"
                    value={user.phoneNumber}
                    onChange={({ target }) => setUser({ phoneNumber: target.value })}
                />

                <label forhtml="academic_research">Academic Research</label>
                <input
                    name="academic_research"
                    type="checkbox"
                    value={user.academic_research}
                    onChange={({ target }) => setUser({ academic_research: target.value })}
                />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Personal