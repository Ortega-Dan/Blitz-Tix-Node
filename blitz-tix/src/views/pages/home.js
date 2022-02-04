import React from 'react';
import '../../App.css';

function AppHome() {
  return (
    <div>
      <h1>Contact Us!</h1>
      <div className="contact_parent_container">
        <div className="form-style-10" class="child_left">
          <h1>Your Info!<span>We'd Like To Get To Know You!</span></h1>
          <form>
            <div className="section"><span>1</span>First Name Address</div>
            <div className="inner-wrap">
              <label>First Name <input type="text" name="field1" /></label>
              <label>Last Name <input type="text" name="field2" /></label>
              <label>Address <textarea name="field3"></textarea></label>
            </div>

            <div className="section"><span>2</span>Email &amp; Phone</div>
            <div className="inner-wrap">
              <label>Email Address <input type="email" name="field4" /></label>
              <label>Phone Number <input type="text" name="field5" /></label>
            </div>

            <div className="section"><span>3</span>Events</div>
            <div className="inner-wrap">
              <label>Event Name <input type="event_name" name="field6" /></label>
              <label>Event Date <input type="event_date" name="field7" /></label>
            </div>

            <div className="section"><span>4</span>Comments</div>
            <div className="inner-wrap">
              <label>Any other information to share?<textarea name="field9"></textarea></label>
            </div>

            {/* <div className="button-section">
              <input type="submit" name="Sign Up" />
              <span className="privacy-policy">
                <input type="checkbox" name="field7">You agree to our Terms and Policy.</input>
              </span>
            </div> */}
          </form>
        </div>

        <div className="form-style-10" class="child_right">
          <h1>Our Info!<span>We'd Like To Hear From You!</span></h1>
          <form>
            <div className="section"><span>1</span>Email &amp; Phone</div>
            <div className="inner-wrap">
              <label>Phone Number</label>
              <label>(208) 534-5699</label>
            </div>

            <div className="section"><span>2</span>Events</div>
            <div className="inner-wrap">
              <label>Email </label>
              <label>EVENTS@ANDX.US</label>
            </div>

            <div className="section"><span>3</span>Address</div>
            <div className="inner-wrap">
              <label>525 RIVER PKWY IDAHO FALLS IDAHO, 83402</label>
              {/* <label><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.271796230671!2d-112.04658478422621!3d43.49666527055621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53545950bbed4e1b%3A0xa0f34b4d0d29098f!2s525%20River%20Pkwy%2C%20Idaho%20Falls%2C%20ID%2083402%2C%20USA!5e0!3m2!1sen!2suk!4v1622755818010!5m2!1sen!2suk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe></label> */}
            </div>

            <div className="section"><span>4</span>Social Media</div>
            <div className="inner-wrap">
              <a href="https://www.facebook.com/AndXent/?ref=br_rs">Facebook!</a><br/>
              <a href="https://www.linkedin.com/company/dj-andx/">LinkedIn!</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AppHome;