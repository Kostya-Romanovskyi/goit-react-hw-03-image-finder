import { Component } from 'react';
import css from './Searchbar.module.css'

export default class Searchbar extends Component {
    state = {
        search: ''
    }

    handleSearch = event => {
        this.setState({ search: event.currentTarget.value.toLowerCase() })
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.search.trim() === '') {
            alert('bvz')
            return
        }
        this.props.keyWords(this.state.search);

        this.setState({ search: '' });
    }

    render() {
        return <header className={css.Searchbar}>
            <form onSubmit={this.handleSubmit} className={css.SearchForm}>
                <button type="submit" className={css.SearchForm__button}>
                    <span className={css.SearchForm__button_label}>Search</span>
                </button>

                <input
                    onChange={this.handleSearch}
                    className={css.SearchForm__input}
                    type="text"
                    autoComplete="off"
                    value={this.state.search}
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    }

}

