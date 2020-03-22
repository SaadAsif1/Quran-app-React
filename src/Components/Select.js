import React, { Component } from "react";
import axios from "axios";

class Select extends Component {
  state = {
    surahs: [],
    verses: [],
    surahN: "1",
    start: "1",
    end: "1"
  };

  componentDidMount = async () => {
    const res1 = await axios.get(
      `http://quranapi.azurewebsites.net/api/chapter/1`
    );

    this.setState({ verses: res1.data[0].Verses });
    const res = await axios.get("http://api.alquran.cloud/v1/surah");
    this.setState({ surahs: res.data.data });
  };

  // value Start
  start = e => this.setState({ start: e.target.value });

  // value End
  end = e => this.setState({ end: e.target.value });

  // Surah Dropdown
  surahChoose = async e => {
    this.setState({ surahN: e.target.value });
    const res = await axios.get(
      `http://quranapi.azurewebsites.net/api/chapter/${e.target.value}`
    );
    this.setState({ verses: res.data[0].Verses });
  };

  // Sending values
  getVal = e => {
    this.props.nums(this.state.start, this.state.end, this.state.surahN);
  };

  render() {
    return (
      <div style={{ background: "#f4f4f4", padding: "1rem" }}>
        {/* Drop Down Surahs */}
        <div style={{ marginBottom: "1rem" }} className='select is-rounded'>
          <select onChange={this.surahChoose} style={{ width: "33.4rem" }}>
            {this.state.surahs.map(surah => (
              <option value={surah.number} key={surah.number}>
                {surah.number} - {surah.englishName} - {surah.name}{" "}
              </option>
            ))}
          </select>
        </div>

        <div className='is-flex'>
          {/* Drop Down One (Surah Start) */}
          <div style={selects} className='select is-rounded'>
            <div style={{ marginRight: "0.2rem" }}>
              <label htmlFor='F'>From Verse</label>
            </div>
            <div>
              <select onChange={this.start} style={{ width: "8.5rem" }}>
                {this.state.verses.map(verse => (
                  <option value={verse.VerseId} key={verse.VerseId}>
                    {verse.VerseId}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Drop Down Two (Surah End) */}
          <div style={selects} className='select is-rounded'>
            <div style={{ marginRight: "0.4rem" }}>
              <label htmlFor='F'>End Verse</label>
            </div>
            <div>
              <select onChange={this.end} style={{ width: "9rem" }}>
                {this.state.verses.map(verse => (
                  <option value={verse.VerseId} key={verse.VerseId}>
                    {verse.VerseId}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <a className='button is-link is-rounded' onClick={this.getVal}>
            Search
          </a>
        </div>
      </div>
    );
  }
}

const selects = {
  display: "flex",
  flexDirection: "coloum",
  width: "19%",
  alignItems: "center",
  marginBottom: "1rem",
  marginRight: "1rem"
};

export default Select;
