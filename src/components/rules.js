import React from "react";
import UseEffectFetchPopularData from "./popular";
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <div className="general">
      <div className="main">
        <Link to={"/"}>
          <img
            alt="logo"
            src={require("../media/logo-transparent.png")}
            className="logo"
          />
        </Link>

        <div className="menus">
          <div className="menu_bar">
            <h4>Rules</h4>
          </div>
          <div className="Boards-content">
            By using this website (the "site"), you agree that you'll follow
            these rules, and understand that if we reasonably think you haven't
            followed these rules, we may (at our own discretion) terminate your
            access to the site:
          </div>
        </div>
        <br></br>
        <div className="Rules-content">
          <aside>
            <h4>Boards</h4>
            <ul>
              <li>
                <a href="/">Global Rules</a>
              </li>
              <li>
                <a href="/">Image Rules</a>
              </li>
              <li>
                <a href="/">Global Rules</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
              <li>
                <a href="/">Some Text</a>
              </li>
            </ul>
          </aside>
          <section>
            <div className="Rules-section-container">
              <h4>Golden Rules</h4>
              <div className="Rules-section-container-content">
                <ol>
                  <li>
                    You will not upload, post, discuss, request, or link to
                    anything that violates local or United States law.
                  </li>
                  <li>
                    You will immediately cease and not continue to access the
                    site if you are under the age of 18.
                  </li>
                  <li>
                    You will not post any of the following outside of /b/:
                    <ol>
                      <li>Troll posts</li>
                      <li>Racism</li>
                      <li>Anthropomorphic ("furry") pornography</li>
                      <li>Grotesque ("guro") images</li>
                      <li>Loli/shota pornography</li>
                      <li>Dubs or GET posts, including 'Roll for X' images</li>
                    </ol>
                  </li>
                  <li>
                    You will not post or request personal information ("dox") or
                    calls to invasion ("raids"). Inciting or participating in
                    cross-board (intra-4chan) raids is also not permitted.
                  </li>

                  <li>
                    All boards on <a href="/">4channel.org</a> are to be
                    considered "work safe". Violators may be temporarily banned
                    and their posts removed. Note: Spoilered pornography or
                    other "not safe for work" content is NOT allowed.
                  </li>
                  <li>
                    The quality of posts is extremely important to this
                    community. Contributors are encouraged to provide
                    high-quality images and informative comments. Please refrain
                    from posting the following:
                    <ol>
                      <li>
                        Irrelevant catchphrases or copypasta <br></br>
                        Example: "What the fuck did you just fucking say about
                        me, you little bitch?..."
                      </li>
                      <li>
                        Indecipherable text <br></br>
                        Example: "lol u tk him 2da bar|?"
                      </li>
                      <li>Irrelevant ASCII macros</li>
                      <li>
                        Ironic shitposting <br></br>
                        Example: "upboads for le funy maymay
                        trollololololoxdxdxdxd~~!"
                      </li>
                      <li>
                        Gibberish text <br></br>
                        Example: "l;kjdsfioasoiupwajnasdfa"
                      </li>
                    </ol>
                  </li>
                  <li>
                    Submitting false or misclassified reports, or otherwise
                    abusing the reporting system may result in a ban. Replying
                    to a thread stating that you've reported or "saged" it, or
                    another post, is also not allowed.
                  </li>
                  <li>
                    Complaining about 4chan (its policies, moderation, etc) on
                    the imageboards may result in post deletion and a ban.
                  </li>
                  <li>
                    Evading your ban will result in a permanent one. Instead,
                    wait and appeal it!
                  </li>
                  <li>
                    No spamming or flooding of any kind. No intentionally
                    evading spam or post filters.
                  </li>
                  <li>
                    Advertising (all forms) is not welcome—this includes any
                    type of referral linking, "offers", soliciting, begging,
                    stream threads, etc.
                  </li>
                  <li>
                    Impersonating a 4chan administrator, moderator, or janitor
                    is strictly forbidden.
                  </li>
                  <li>
                    Do not use avatars or attach signatures to your posts.
                  </li>
                  <li>
                    The use of scrapers, bots, or other automated posting or
                    downloading scripts is prohibited. Users may also not post
                    from proxies, VPNs, or Tor exit nodes.
                  </li>
                  <li>
                    All pony/brony threads, images, Flashes, and avatars belong
                    on /mlp/.
                  </li>
                  <li>
                    All request threads for adult content belong on /r/, and all
                    request threads for work-safe content belong on /wsr/,
                    unless otherwise noted.
                  </li>
                  <li>
                    Do not upload images containing additional data such as
                    embedded sounds, documents, archives, etc.
                  </li>
                </ol>
                <br></br>
                Global rules apply to all boards unless otherwise noted.
                <br></br> Remember: The use of 4chan is a privilege, not a
                right. The 4chan moderation team reserves the right to revoke
                access and remove content for any reason without notice.
              </div>
            </div>

            <div className="Rules-section-container">
              <h4>Image Boards</h4>
              <div className="Rules-section-container-content">
                <div>/3/ - 3DCG</div>
                <ol>
                  <li>
                    Images and discussion should relate to 3D modeling and
                    imagery.
                  </li>
                  <li>
                    Remember: This is a worksafe board! No adult content is
                    allowed.
                  </li>
                </ol>
                <hr></hr>
                <div>/a/ - Anime & Manga</div>
                <ol>
                  <li>
                    All images and resulting discussion should pertain to anime
                    or manga.
                  </li>
                  <li>
                    The use of spoiler tags is highly recommended. To spoilerize
                    text, enclose it like so: [spoiler]spoiled text[/spoiler].
                    In addition, images may be spoilerized by checking the
                    "[Spoiler Image?]" box on the submission form.
                  </li>
                  <li>
                    Purposeful spoiling of a series may result in post deletion
                    and temporary ban.
                  </li>
                  <li>
                    The discussion of "live action" television shows is
                    permitted so long as they are distinctly rooted in, or based
                    off of an anime or manga series.
                  </li>
                  <li>
                    Japanese visual novels should be posted in /jp/, and Western
                    on /vg/.
                  </li>
                  <li>
                    Threads should be created with substantial OP text
                    containing a meaningful topic of discussion. Please refrain
                    from posting catch-phrase or template threads.
                  </li>
                </ol>
              </div>
            </div>

            <div className="Rules-section-container">
              <h4>Upload Boards</h4>
              <div className="Rules-section-container-content">
                <div>/f/ - Flash</div>
                <ol>
                  <li>
                    All uploaded files should be uniquely Japanese (pertain to
                    Japanese culture). "Run of the mill" content is to be had
                    elsewhere.
                  </li>
                  <li>
                    Posting retail Flash files or Flash exploits is prohibited.
                  </li>
                  <li>
                    The tagging of uploaded files is mandatory. Improperly
                    tagged items may be removed without notice. Abuse of the
                    tagging system may result in temporary ban.
                  </li>
                  <li>
                    If your file is to be tagged as "[?] Other", re-examine the
                    first rule before submission.
                  </li>
                </ol>
              </div>
            </div>

            <div className="Rules-section-container">
              <h4>IRC</h4>
              <div className="Rules-section-container-content">
                <div>
                  #4chan on Rizon is the official IRC channel of 4chan.org, a
                  website. You may use this channel to speak with other 4chan
                  users, contact a moderator about technical site issues, or for
                  help with a ban. Moderators are designated either as
                  @Operators or %Half-operators.
                </div>
                <ol>
                  <li>
                    Do not post personal information in the channel, including
                    your IP address. If you are visiting the channel to speak
                    with a moderator regarding a ban you were issued, for
                    example, sensitive details such as your IP or appeal ID
                    number should be shared privately.
                  </li>
                  <li>
                    Do not use this channel in lieu of reporting posts that
                    violate the rules. If you have submitted a report, please
                    rest assured that a moderator/janitor will tend to it as
                    soon as possible.
                  </li>
                  <li>
                    Appeal your ban on the site (if applicable) and wait for a
                    response there before attempting to contact a moderator via
                    IRC.
                  </li>
                  <li>
                    Do not excessively flood, spam, or otherwise harass users
                  </li>

                  <li>No Fservs/XDCCs/annoying IRC scripts.</li>
                  <li>
                    The site's global rules are enforced where applicable.
                  </li>
                  <li>
                    Operators reserve the right to remove users from the channel
                    as they see fit.
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>
        <br></br>

        <div className="menus">
          <div className="menu_bar">
            <h4>Popular Threads</h4>

            <div className="dropdown">
              <div className="dopdown-button">options ▼</div>
              <div className="dropdown-content">
                <div>
                  <a href="/">Show Worksafe Content Only</a>
                </div>
                <div>
                  <a href="/">Show NSFW Content only</a>
                </div>
                <div>
                  <a href="/">Show All Content</a>
                </div>
              </div>
            </div>
          </div>
          <div className="Popular_Threads_content">
            <UseEffectFetchPopularData />
          </div>
        </div>

        <br></br>
        <div className="menus">
          <div className="menu_bar">
            <h4>Stats</h4>
          </div>
          <div className="stats">
            <span>Total Posts: 4,292,172,453</span>
            <span>Current Users: 233,427</span>
            <span>Active Content: 1217 GB</span>
          </div>
        </div>
        <br></br>

        {/* ------------------------------------------------------------------------------------------------------- */}

        <div className=" menus-more">
          <div className="more more-options">
            <span>
              <a href="/">Home</a>
            </span>
            <span>
              <a href="/">News</a>
            </span>
            <span>
              <a href="/">Blog</a>
            </span>
            <span>
              <a href="/">FAQ</a>
            </span>
            <span>
              <a href="/">Rules</a>
            </span>
            <span>
              <a href="/">Support 4chan</a>
            </span>
            <span>
              <a href="/">Advertise</a>
            </span>
            <span>
              <a href="/">Press</a>
            </span>
            <span>
              <a href="/">日本語</a>
            </span>
          </div>
        </div>

        <br></br>
        <div className="menus-more2">
          <span>
            <a href="/">About</a>
          </span>
          <span>•</span>
          <span>
            <a href="/">Feedback</a>
          </span>
          <span>•</span>
          <span>
            <a href="/">Legal</a>
          </span>
          <span>•</span>
          <span>
            <a href="/">Contact</a>
          </span>
        </div>
        <br></br>
        <div className="copyright">
          Copyright © 2003-2022 4chan community support LLC. All rights
          reserved.
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default Rules;
