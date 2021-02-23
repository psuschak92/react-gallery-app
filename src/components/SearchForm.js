import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idk : 'blah'
        }
    }

    render() {
        return (
            <form onSubmit='dosomething'></form>
        )
    }
}

export default SearchForm;