import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import PageWrapper from '../components/PageWrapper';

export default function DemoPage() {
  if (process.env.NODE_ENV !== 'development') {
    notFound();
  }
  return (
    <PageWrapper>
      <article className="post" id="demo">
        <header>
          <div className="title">
            <h2>
              <Link href="/demo">Component Demo</Link>
            </h2>
            <p>Showcasing unused template components</p>
          </div>
        </header>

        {/* Author Component */}
        <section>
          <h3>Author Component</h3>
          <p>Used in blog posts to show the author&apos;s avatar and name:</p>
          <a href="#" className="author">
            <span className="name">Borislav Grigorov</span>
            <Image
              src="/images/me.jpg"
              alt="Author"
              width={64}
              height={64}
              style={{ borderRadius: '50%' }}
            />
          </a>
        </section>

        <hr />

        {/* Box Component */}
        <section>
          <h3>Box Component</h3>
          <p>A bordered container for highlighted content:</p>
          <div className="box">
            <h4>Important Information</h4>
            <p>This is content inside a box component. It has a border and padding.</p>
          </div>
          <p>Alternative (no border) version:</p>
          <div className="box alt">
            <p>This is a box with the &quot;alt&quot; class - no border, no padding.</p>
          </div>
        </section>

        <hr />

        {/* Search Form */}
        <section>
          <h3>Search Form</h3>
          <p>A form with a search icon:</p>
          <form className="search">
            <input type="text" placeholder="Search..." />
          </form>
        </section>

        <hr />

        {/* Select Wrapper */}
        <section>
          <h3>Custom Select Dropdown</h3>
          <p>A styled dropdown with a chevron icon:</p>
          <div className="select-wrapper">
            <select>
              <option value="">Choose an option...</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        </section>

        <hr />

        {/* Mini Posts Grid */}
        <section>
          <h3>Mini Posts Container</h3>
          <p>A flex container for mini post cards (responsive grid):</p>
          <div className="mini-posts">
            <article className="mini-post">
              <header>
                <h3>
                  <a href="#">Sample Post 1</a>
                </h3>
                <time className="published">January 2025</time>
              </header>
              <a href="#" className="image">
                <img src="/images/projects/synkube.png" alt="Sample" />
              </a>
            </article>
            <article className="mini-post">
              <header>
                <h3>
                  <a href="#">Sample Post 2</a>
                </h3>
                <time className="published">December 2024</time>
              </header>
              <a href="#" className="image">
                <img src="/images/projects/zsh.png" alt="Sample" />
              </a>
            </article>
            <article className="mini-post">
              <header>
                <h3>
                  <a href="#">Sample Post 3</a>
                </h3>
                <time className="published">November 2024</time>
              </header>
              <a href="#" className="image">
                <img src="/images/projects/encrypt.png" alt="Sample" />
              </a>
            </article>
          </div>
        </section>

        <hr />

        {/* Image Variants */}
        <section>
          <h3>Image Variants</h3>
          <p>Different image positioning classes:</p>

          <h4>Image Left</h4>
          <p>
            <span className="image left">
              <img src="/images/me.jpg" alt="Left" width={100} />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris. This text wraps around the left-floated image.
          </p>

          <div style={{ clear: 'both' }} />

          <h4>Image Right</h4>
          <p>
            <span className="image right">
              <img src="/images/me.jpg" alt="Right" width={100} />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris. This text wraps around the right-floated image.
          </p>

          <div style={{ clear: 'both' }} />

          <h4>Image Fit (Full Width)</h4>
          <span className="image fit">
            <img src="/images/projects/synkube.png" alt="Fit" />
          </span>
        </section>

        <hr />

        {/* Button Variants */}
        <section>
          <h3>Button Variants</h3>
          <p>Different button sizes:</p>
          <ul className="actions">
            <li>
              <a href="#" className="button small">
                Small
              </a>
            </li>
            <li>
              <a href="#" className="button">
                Default
              </a>
            </li>
            <li>
              <a href="#" className="button big">
                Big
              </a>
            </li>
          </ul>
          <p>Full width button:</p>
          <a href="#" className="button fit">
            Full Width Button
          </a>
        </section>

        <hr />

        {/* Table Variants */}
        <section>
          <h3>Table Variants</h3>
          <h4>Default Table</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Developer</td>
                <td>Seattle</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Designer</td>
                <td>Portland</td>
              </tr>
              <tr>
                <td>Bob Wilson</td>
                <td>Manager</td>
                <td>Vancouver</td>
              </tr>
            </tbody>
          </table>

          <h4>Alternative Table (bordered cells)</h4>
          <table className="alt">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Developer</td>
                <td>Seattle</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Designer</td>
                <td>Portland</td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr />

        {/* List Variants */}
        <section>
          <h3>List Variants</h3>
          <h4>Alternative List (bordered items)</h4>
          <ul className="alt">
            <li>Item one with border separator</li>
            <li>Item two with border separator</li>
            <li>Item three with border separator</li>
          </ul>
        </section>

        <hr />

        {/* Special Section */}
        <section className="special">
          <h3>Special Section</h3>
          <p>This section uses the &quot;special&quot; class which centers all text.</p>
          <a href="#" className="button">
            Centered Button
          </a>
        </section>
      </article>
    </PageWrapper>
  );
}

