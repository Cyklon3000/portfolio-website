// Dictionary of paths for each letter
const letterPaths = {
    A: "M43.966 2.36c2.606 0 4.482 1.251 5.42 3.753l23.767 67.963c1.146 3.335-.207 5.42-3.857 5.42H58.142c-2.71 0-4.482-1.25-5.316-3.857l-3.23-9.485H26.662l-3.231 9.485c-.94 2.606-2.71 3.857-5.421 3.857H6.753c-3.648 0-5.003-2.085-3.856-5.42l23.87-67.963c.937-2.502 2.71-3.753 5.316-3.753zm1.25 46.699L38.024 27.69l-6.567 21.369z",
    B: "M7.19 79.496c-3.126 0-4.69-1.564-4.69-4.69V7.05c0-3.127 1.563-4.69 4.69-4.69H36.17c6.567 0 12.195 1.98 16.678 5.837 1.666 1.563 3.648 3.335 5.107 6.045 1.46 2.71 2.503 6.255 2.503 10.945v.105c0 3.23-1.043 6.254-2.396 8.651-1.357 2.502-3.232 4.274-4.795 4.795 1.356.313 4.065 1.668 6.567 4.482 2.502 2.815 4.586 6.776 5.003 11.883.118 2.92-.207 6.567-1.67 10.216-1.459 3.648-3.96 7.192-7.4 9.798-3.44 2.606-8.13 4.378-14.072 4.378zm14.073-59.624v12.926h13.863c1.563 0 3.336-.522 4.69-1.564 1.25-1.042 2.294-2.502 2.294-4.586 0-3.44-1.773-6.776-5.942-6.776zm0 28.874V61.67h17.095c3.752 0 6.775-1.98 6.775-6.462 0-4.483-2.813-6.463-7.4-6.463z",
    C: "M43.048 83.457c-11.153 0-21.264-4.482-28.665-11.883C6.983 64.174 2.5 54.062 2.5 42.909c0-11.258 4.482-21.265 11.883-28.666C21.784 6.843 31.895 2.36 43.048 2.36 53.89 2.36 64 6.53 71.61 14.035c2.19 2.189 1.877 4.586-.626 6.567l-8.235 6.463c-2.396 1.98-4.17 1.667-6.567-.313-3.752-3.127-8.13-4.69-13.134-4.69-5.733 0-10.945 2.397-14.697 6.15-3.753 3.752-6.15 8.964-6.15 14.697 0 5.733 2.396 10.945 6.15 14.697 3.752 3.753 8.964 6.046 14.697 6.046 4.795 0 9.07-1.46 12.717-4.378 2.397-1.772 4.274-2.19 6.672-.209l8.026 6.776c2.396 1.98 2.71 4.482.313 6.67-7.505 7.09-17.304 10.946-27.727 10.946z",
    D: "M7.19 79.496c-3.126 0-4.69-1.564-4.69-4.69V7.05c0-3.127 1.563-4.69 4.69-4.69h24.6c10.008 0 19.389 4.169 26.477 11.778C65.042 21.54 68.9 31.026 68.9 40.93c0 10.423-4.274 20.117-11.049 27.1-6.775 7.089-16.157 11.467-26.163 11.467zM22.2 22.06v37.734h9.487c4.586 0 8.964-2.293 12.195-5.733 3.232-3.336 5.212-8.13 5.212-13.134 0-5.003-1.98-9.798-5.108-13.238-3.127-3.336-7.609-5.629-12.195-5.629z",
    E: "M56.6 74.805c0 3.127-1.564 4.69-4.692 4.69H7.191c-3.127 0-4.691-1.563-4.691-4.69V7.051c0-3.127 1.563-4.69 4.69-4.69h44.718c3.128 0 4.691 1.563 4.691 4.69v10.32c0 3.127-1.563 4.69-4.69 4.69H22.2v9.694h21.89c3.127 0 4.69 1.564 4.69 4.69v8.861c0 3.127-1.563 4.69-4.69 4.69H22.2v9.8h29.707c3.128 0 4.691 1.563 4.691 4.69z",
    F: "M22.2 49.997v24.808c0 3.127-1.562 4.69-4.69 4.69H7.19c-3.126 0-4.69-1.563-4.69-4.69V7.051c0-3.127 1.563-4.69 4.69-4.69h43.26c3.126 0 4.69 1.563 4.69 4.69v10.32c0 3.127-1.563 4.69-4.69 4.69H22.2v9.694h20.431c3.127 0 4.691 1.564 4.691 4.69v8.861c0 3.127-1.563 4.69-4.69 4.69z",
    G: "M42.944 83.144c-11.153 0-21.264-4.586-28.56-11.883C7.085 63.965 2.5 53.958 2.5 42.804c0-11.153 4.586-21.368 11.883-28.665C21.68 6.842 31.791 2.36 42.944 2.36c10.84 0 20.848 4.066 28.353 11.57 2.19 2.398 1.876 4.691-.52 6.672l-8.236 6.463c-2.396 1.98-4.17 1.667-6.567-.313-3.753-3.127-8.13-4.69-13.03-4.69-5.733 0-10.945 2.292-14.697 6.045-3.753 3.752-6.046 8.964-6.046 14.697 0 5.733 2.293 10.945 6.046 14.906 3.752 3.961 8.964 6.567 14.697 6.567 4.482 0 7.818-.938 10.32-2.189a14.554 14.554 0 004.69-3.544v-5.003h-12.82c-3.128 0-4.692-1.564-4.692-4.69v-6.464c0-3.127 1.564-4.69 4.691-4.69h27.831c3.128 0 4.691 1.563 4.691 4.69v18.867c0 2.19-.417 3.857-1.25 5.212-6.67 10.111-17.616 16.678-33.46 16.678z",
    H: "M63.27 74.805c0 3.127-1.563 4.69-4.69 4.69H48.26c-3.127 0-4.69-1.563-4.69-4.69V50.831H22.2v23.974c0 3.127-1.562 4.69-4.69 4.69H7.19c-3.126 0-4.69-1.563-4.69-4.69V7.051c0-3.127 1.563-4.69 4.69-4.69h10.32c3.127 0 4.69 1.563 4.69 4.69v23.975h21.37V7.05c0-3.127 1.563-4.69 4.69-4.69h10.32c3.127 0 4.69 1.563 4.69 4.69z",
    I: "M17.51 2.36c3.127 0 4.69 1.564 4.69 4.691v67.754c0 3.127-1.562 4.69-4.69 4.69H7.19c-3.126 0-4.69-1.563-4.69-4.69V7.051c0-3.127 1.563-4.69 4.69-4.69z",
    J: "M14.21 53.645c2.502-1.563 4.586-.938 6.358 1.668 1.98 3.023 4.9 6.046 8.547 6.046 2.503 0 5.004-.417 6.88-2.19 1.876-1.667 3.127-5.003 3.127-10.84V7.051c0-3.127 1.563-4.69 4.691-4.69h10.423c3.128 0 4.691 1.563 4.691 4.69v43.675c0 6.567-1.666 14.177-6.254 20.222-4.587 6.046-11.987 10.424-23.558 10.424-7.922 0-14.489-2.606-19.596-7.713-2.606-2.606-4.69-5.838-6.255-8.444-1.563-2.605-.626-4.794 1.877-6.358z",
    K: "M32.625 40.198l28.978 33.565c2.813 3.023 1.46 5.733-2.606 5.733H45.654c-2.19 0-4.17-.938-5.733-2.71L22.2 55.834v18.971c0 3.127-1.563 4.69-4.69 4.69H7.19c-3.127 0-4.691-1.563-4.691-4.69V7.051c0-3.127 1.563-4.69 4.69-4.69h10.32c3.127 0 4.69 1.563 4.69 4.69v18.971L40.339 5.07c1.667-1.98 3.336-2.605 5.733-2.605h11.362c4.065 0 5.316 2.71 2.71 5.733z",
    L: "M22.2 59.795h27.624c3.127 0 4.69 1.564 4.69 4.69v10.32c0 3.127-1.563 4.69-4.69 4.69H7.19c-3.127 0-4.691-1.563-4.691-4.69V7.051c0-3.127 1.563-4.69 4.69-4.69h10.32c3.127 0 4.69 1.563 4.69 4.69z",
    M: "M2.5 7.051c0-3.127 1.563-4.69 4.69-4.69h8.757c2.606 0 4.378 1.146 5.524 3.543l20.014 43.259L61.603 5.904c1.146-2.397 2.919-3.544 5.524-3.544h8.756c3.127 0 4.69 1.564 4.69 4.691v67.754c0 3.127-1.562 4.69-4.69 4.69h-10.32c-3.126 0-4.69-1.563-4.69-4.69V47.912L49.094 75.848c-1.043 2.397-2.92 3.648-5.525 3.648H39.4c-2.606 0-4.482-1.25-5.525-3.648L22.201 48.016v26.79c0 3.126-1.563 4.69-4.69 4.69H7.19c-3.127 0-4.691-1.564-4.691-4.69z",
    N: "M7.19 79.496c-3.126 0-4.69-1.564-4.69-4.69V7.05c0-3.127 1.563-4.69 4.69-4.69h8.965c2.396 0 4.378 1.042 5.733 3.022l24.079 34.92V7.05c0-3.127 1.563-4.69 4.69-4.69h10.32c3.127 0 4.69 1.563 4.69 4.69v67.754c0 3.127-1.562 4.69-4.69 4.69h-8.964c-2.397 0-4.378-1.041-5.733-3.022L22.2 41.241v33.564c0 3.127-1.562 4.69-4.69 4.69z",
    O: "M43.048 83.353c-11.257 0-21.264-4.587-28.665-11.883C6.983 64.173 2.5 54.062 2.5 42.909c0-11.258 4.482-21.265 11.883-28.666C21.784 6.843 31.791 2.36 43.048 2.36c11.154 0 21.265 4.482 28.666 11.883 7.4 7.401 11.883 17.408 11.883 28.666 0 11.153-4.483 21.264-11.883 28.56-7.401 7.297-17.512 11.884-28.666 11.884zm0-61.292c-5.733 0-10.944 2.398-14.697 6.15-3.753 3.753-6.15 8.965-6.15 14.698 0 5.733 2.396 10.945 6.15 14.697 3.753 3.753 8.964 6.046 14.697 6.046 5.733 0 10.945-2.293 14.698-6.046 3.752-3.752 6.046-8.964 6.046-14.697 0-5.733-2.293-10.945-6.046-14.698-3.753-3.752-8.965-6.15-14.698-6.15z",
    P: "M63.166 27.69c0 7.61-3.023 15.427-8.756 19.91-4.586 3.648-10.632 5.628-17.303 5.628H22.2v21.577c0 3.127-1.563 4.69-4.69 4.69H7.19c-3.127 0-4.691-1.563-4.691-4.69V7.051c0-3.127 1.563-4.69 4.69-4.69H38.88c6.671 0 12.196 1.98 16.678 5.837 1.666 1.563 3.648 4.065 5.108 7.296 1.46 3.336 2.502 7.505 2.502 12.196zm-18.971 0c0-3.648-2.19-6.359-6.359-6.359H22.201v12.926h14.906c3.648 0 7.088-2.502 7.088-6.567z",
    Q: "M71.714 90.754c-2.503 1.98-4.691 1.667-6.567-.73l-7.297-9.381a41.431 41.431 0 01-14.802 2.71c-11.257 0-21.264-4.587-28.665-11.883C6.983 64.173 2.5 54.062 2.5 42.909c0-11.258 4.482-21.265 11.883-28.666C21.784 6.843 31.791 2.36 43.048 2.36c11.154 0 21.265 4.482 28.666 11.883 7.4 7.401 11.883 17.408 11.883 28.666 0 10.006-3.544 19.18-9.694 26.267l6.775 8.652c1.876 2.502 1.563 4.69-.833 6.671zM40.13 57.919c-1.98-2.606-1.667-4.795.73-6.671l8.13-6.359c2.606-1.772 4.795-1.563 6.671.834l5.525 7.192c1.773-3.022 2.606-6.358 2.606-10.006 0-5.733-2.293-10.945-6.046-14.698-3.752-3.752-8.964-6.15-14.697-6.15-5.733 0-10.945 2.398-14.698 6.15-3.752 3.753-6.15 8.965-6.15 14.698 0 5.733 2.397 10.945 6.15 14.697 3.753 3.753 8.965 6.046 14.698 6.046.626 0 1.146 0 1.46-.104z",
    R: "M63.166 27.69c0 7.61-3.023 15.427-8.756 19.91a9.851 9.851 0 01-2.19 1.459c-.73.312-1.146.417-1.25.52l13.552 24.497c1.98 3.335 0 5.42-3.649 5.42H49.407c-2.813 0-4.065-1.147-5.42-3.648l-12.3-23.87H22.2v22.827c0 3.127-1.563 4.69-4.69 4.69H7.19c-3.127 0-4.691-1.563-4.691-4.69V7.051c0-3.127 1.563-4.69 4.69-4.69H38.88c6.671 0 12.196 1.98 16.678 5.837 1.666 1.563 3.648 4.065 5.108 7.296 1.46 3.336 2.502 7.505 2.502 12.196zm-19.075 0c0-3.648-2.086-6.359-6.255-6.359H22.201v12.926h14.906c3.648 0 6.984-2.502 6.984-6.567z",
    S: "M46.154 63.026c1.25-.833 1.876-1.98 1.98-3.23.088-1.148-.207-2.19-.94-2.92-.313-.312-.73-.625-1.25-1.042-1.146-.73-3.127-1.772-6.775-2.814-1.877-.522-4.17-1.043-6.984-1.564-11.362-2.397-21.37-6.775-25.434-12.613-2.083-3.231-3.127-6.67-3.336-9.902-.207-3.232.118-6.254.94-8.652 1.666-5.42 5.837-9.902 11.257-13.03C21.032 4.132 27.808 2.36 35.21 2.36c6.254 0 11.466 1.043 15.74 2.294 4.17 1.355 7.61 3.23 10.215 4.899 2.606 1.667 3.023 3.856 1.043 6.462l-5.629 7.818c-1.563 2.398-3.752 2.919-6.462 1.355C46.363 23 41.047 20.81 35.21 20.81c-3.753 0-6.359.834-8.026 1.772-1.67.938-2.503 2.19-2.816 3.023-.834 2.085.118 3.544 1.98 4.69 1.876 1.148 4.69 1.877 8.026 2.607 16.26 3.231 25.016 7.505 28.873 12.508 4.065 5.316 5.108 11.57 3.961 18.138-.73 5.003-3.335 10.006-8.234 13.759-4.9 3.857-12.196 6.358-22.307 6.358H34.79c-.73 0-1.357 0-2.087-.104-8.026-.417-17.303-2.085-27.727-8.026-2.813-1.564-3.231-4.065-1.25-6.567l6.984-8.756c1.773-2.398 3.961-2.71 6.567-1.147 5.42 3.232 9.59 4.691 15.532 5.42 5.941.73 11.153.105 13.342-1.459z",
    T: "M27.934 79.496c-3.127 0-4.69-1.564-4.69-4.69V22.06H7.19c-3.127 0-4.691-1.563-4.691-4.69V7.05c0-3.127 1.563-4.69 4.69-4.69h51.807c3.127 0 4.69 1.563 4.69 4.69v10.32c0 3.127-1.563 4.69-4.69 4.69H42.944v52.744c0 3.127-1.563 4.69-4.69 4.69z",
    U: "M74.007 43.326c-.118 9.59-3.648 19.18-9.798 26.267-6.255 7.089-15.115 11.78-25.955 11.78-10.424 0-19.284-4.275-25.539-11.258C6.461 63.13 2.813 53.645 2.5 43.325V7.052c0-3.127 1.563-4.69 4.69-4.69h10.32c3.127 0 4.69 1.563 4.69 4.69v36.275c0 5.42 1.774 10.11 4.692 13.446 2.919 3.44 6.88 5.42 11.362 5.42 4.273 0 8.339-1.98 11.257-5.42 2.92-3.335 4.69-8.026 4.69-13.446V7.05c0-3.127 1.564-4.69 4.691-4.69h10.424c3.127 0 4.69 1.563 4.69 4.69z",
    V: "M37.075 46.244L50.94 6.113c.936-2.502 2.71-3.753 5.42-3.753h11.153c3.44 0 4.9 2.085 3.753 5.316L47.812 75.848c-.94 2.501-2.813 3.752-5.421 3.752H31.863c-2.71 0-4.482-1.25-5.42-3.752L2.885 7.676C1.74 4.445 3.198 2.36 6.638 2.36H17.79c2.606 0 4.482 1.251 5.42 3.753z",
    W: "M2.676 7.468c-.73-3.231.834-5.108 4.17-5.108h10.632c2.813 0 4.586 1.355 5.212 4.17l7.192 33.877L39.16 6.32c.73-2.606 2.396-3.96 5.212-3.96h11.362c2.813 0 4.482 1.354 5.212 3.96l9.277 33.877L77.415 6.53c.626-2.815 2.396-4.17 5.211-4.17h10.528c3.336 0 4.9 1.877 4.17 5.108L82.522 75.43c-.626 2.814-2.396 4.17-5.212 4.17H65.22c-2.813 0-4.483-1.356-5.212-3.962l-9.903-36.274-9.902 36.274c-.834 2.606-2.606 3.961-5.316 3.961H22.794c-2.813 0-4.586-1.355-5.212-4.17z",
    X: "M38.05 23.104l11.987-17.72c1.356-1.981 3.336-3.024 5.733-3.024h13.342c3.857 0 5.212 2.502 3.023 5.733L49.933 40.615l22.515 33.148c2.19 3.231.833 5.733-3.023 5.733H56.083c-2.397 0-4.378-1.042-5.734-3.023l-12.3-18.241-12.404 18.241c-1.356 1.98-3.335 3.023-5.733 3.023H6.57c-3.857 0-5.212-2.502-3.023-5.733l22.515-33.148L3.86 8.093C1.67 4.862 3.027 2.36 6.883 2.36h13.342c2.396 0 4.378 1.043 5.733 3.023z",
    Y: "M30.322 79.496c-3.127 0-4.69-1.564-4.69-4.69V43.637L3.428 7.99c-1.98-3.231-.73-5.629 3.127-5.629H18.96c2.397 0 4.274 1.043 5.63 3.127l10.84 17.408L46.27 5.487c1.357-2.084 3.232-3.127 5.63-3.127h12.404c3.856 0 5.212 2.398 3.127 5.63L45.332 43.637v31.167c0 3.127-1.563 4.69-4.69 4.69z",
    Z: "M7.19 79.496c-3.126 0-4.69-1.564-4.69-4.69v-8.131c0-2.398.417-3.857 1.98-5.838l28.873-38.776h-24.6c-3.127 0-4.69-1.563-4.69-4.69V7.05c0-3.127 1.563-4.69 4.69-4.69h44.718c3.128 0 4.69 1.563 4.69 4.69v8.026c0 2.19-.626 4.066-1.875 5.838l-28.04 38.88h26.789c3.127 0 4.69 1.564 4.69 4.69v10.32c0 3.127-1.563 4.69-4.69 4.69z",
};

const letterWidths = {
    A: 71.049,
    B: 62.358,
    C: 70.573,
    D: 66.399,
    E: 54.099,
    F: 52.640,
    G: 75.155,
    H: 60.770,
    I: 19.701,
    J: 56.427,
    K: 60.589,
    L: 52.015,
    M: 78.074,
    N: 63.168,
    O: 81.097,
    P: 60.667,
    Q: 81.097,
    R: 62.804,
    S: 65.145,
    T: 61.187,
    U: 71.507,
    V: 69.150,
    W: 95.000,
    X: 70.995,
    Y: 65.906,
    Z: 57.226,
}

// Letter spacing constant
const LETTER_SPACING = 8;
const HEIGHT = 100;

let currentListItem = 0;

// Function to create SVG for a word
function createWordSVG(word)
{
    // Setup svg of structure
    // svg
    //     > defs
    //         > <path>'s     (individual letter paths)
    //         > clipPath > <use>'s     (for clipping image to letter paths; referencing <path>'s)
    //     > image     (using clipPath as clip-path)
    //     > <use>'s (for overlay display of letters; referencing <path>'s )

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
    clipPath.setAttribute('id', `blur-letter-paths-${currentListItem}`);
    const image = document.createElementNS('http://www.w3.org/2000/svg', 'image')
    image.setAttribute('id', 'blurred-clip-background');
    image.style = `clip-path: url(#blur-letter-paths-${currentListItem})`;
    image.setAttribute('width', '500');
    image.setAttribute('height', '500');
    image.setAttribute('href', 'https://picsum.photos/id/210/500/500');
    
    svg.appendChild(defs);
    svg.appendChild(image);

    let totalWidth = 0;
    word.toUpperCase().split('').forEach((letter, index) =>
        {
            if (letterPaths[letter])
            {
                defs.appendChild(createLetterPath(letter, index));
                clipPath.appendChild(createLetterUse(index, false))
                svg.appendChild(createLetterUse(index, true))

                totalWidth += letterWidths[letter] + LETTER_SPACING;
            }
        });

    defs.appendChild(clipPath);

    function createLetterPath(letter, index) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute("id", `letter-path-${currentListItem}-${index}`)
        path.setAttribute("class", `letter-path-${letter}`)
        path.setAttribute("d", letterPaths[letter]);
        path.setAttribute("transform", `translate(${totalWidth}, 0)`);
        return path
    }

    function createLetterUse(index, isPath) {
        const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        use.setAttribute("href", `#letter-path-${currentListItem}-${index}`)
        if (isPath) {
            use.setAttribute("class", `letter-path`)
        }
        return use
    }

    svg.setAttribute("height", `${HEIGHT}`);
    svg.setAttribute("viewBox", `0 0 ${totalWidth} ${HEIGHT}`);

    return svg;
}

const headingSVGs = [];

// Main function to replace text in list items with SVGs
function replaceTextWithSVG()
{
    const listItems = document.querySelectorAll('li');

    listItems.forEach(li =>
    {
        const text = li.textContent.trim();
        const svg = createWordSVG(text);
        headingSVGs.push(svg);
        li.textContent = ''; // Clear the text
        li.appendChild(svg);

        currentListItem += 1
    });
}


// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', replaceTextWithSVG);

function getTopRightCorners() {
    function getTopRightCorner(svg) {
        const rect = svg.getBoundingClientRect();
        const x = rect.left;
        const y = rect.top;

        // get image
        const image = svg.getElementsByTagName('image')[0];
        
        image.setAttribute('x', -x);
        image.setAttribute('y', -y);
    }

    for (const svg of headingSVGs) {
        getTopRightCorner(svg);
        console.log("Hi");
    }
}

// Update compensating image shift
window.addEventListener('scroll', getTopRightCorners);
window.addEventListener('resize', getTopRightCorners);

document.addEventListener('DOMContentLoaded', getTopRightCorners);
