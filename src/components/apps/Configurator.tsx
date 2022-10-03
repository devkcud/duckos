import WindowSample from '../WindowSample';

export default function Configurator() {
  return (
    <WindowSample
      id="configurator.dk"
      title="Configurator (v0.1.0)"
      gotoTaskbar
      icon="https://loremflickr.com/320/320/notes"
      hide
      body={
        <>
          <h1 style={{ textAlign: 'center', marginBottom: '16px' }}>Configurator</h1>
          <fieldset style={{ padding: '20px', borderRadius: '10px' }}>
            <legend style={{ padding: '10px' }}>Background Image</legend>

            <div style={{ display: 'flex' }}>
              <p style={{ marginRight: '10px' }}>Image:</p>
              <label
                htmlFor="background-image-input"
                style={{ cursor: 'pointer' }}
                onChange={(e) => {
                  const element = e.target as HTMLInputElement;

                  const bgImg = document.querySelector('#desktop>.bg-image')! as HTMLElement;
                  bgImg.style.backgroundColor = 'none';
                  bgImg.style.backgroundImage = `url(${URL.createObjectURL(element.files![0])})`;
                }}
              >
                Send
                <input
                  type="file"
                  accept="image/*"
                  id="background-image-input"
                  style={{ display: 'none' }}
                />
              </label>
            </div>

            <div style={{ display: 'flex' }}>
              <p style={{ marginRight: '10px' }}>Color:</p>

              <input
                type="color"
                id="background-image-input"
                style={{ background: 'none', outline: 'none', border: 'none' }}
                onChange={(e) => {
                  const element = e.target as HTMLInputElement;

                  const bgImg = document.querySelector('#desktop>.bg-image')! as HTMLElement;
                  bgImg.style.backgroundColor = element.value;
                  bgImg.style.backgroundImage = `none`;
                }}
              />
            </div>

            <div style={{ display: 'flex' }}>
              <p style={{ marginRight: '10px' }}>Blur:</p>
              <input
                type="range"
                min={0}
                defaultValue={5}
                max={15}
                step={1}
                onChange={(e) => {
                  const element = e.target as HTMLInputElement;

                  const bgImg = document.querySelector('#desktop>.bg-image')! as HTMLElement;
                  bgImg.style.filter = `blur(${element.value}px) brightness(75%)`;
                }}
              />
            </div>
          </fieldset>
        </>
      }
    />
  );
}
