// Array of objects
/* 
  {
    q: "Count the triangles in the picture below.",
    options: ["7", "9", "12", "13"],
    answer: 3,
    img: "img/triangle.jpg",
  },
  {
    q: `Solve for \\(x\\)`,
    options: [`\\(7\\)`, `\\(9\\)`, `\\(12\\)`, `\\(13\\)`],
    answer: 3,
  },
 */
const quiz = [
    {
        /* Simplifying Radicals without Variables*/
        q: `Simplify \\(\\sqrt{8}\\)`,
        options: [
            `\\(2\\sqrt{2}\\)`,
            `\\(4\\sqrt{2}\\)`,
            `\\(2\\sqrt{4}\\)`,
            `\\(2\\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals without Variables*/
        q: `Simplify \\(\\sqrt{50}\\)`,
        options: [
            `\\(5\\sqrt{2}\\)`,
            `\\(5\\sqrt{5}\\)`,
            `\\(25\\sqrt{2}\\)`,
            `\\(10\\sqrt{5}\\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals without Variables*/
        q: `Simplify \\(\\sqrt{75}\\)`,
        options: [
            `\\(5\\sqrt{3}\\)`,
            `\\(5\\sqrt{5}\\)`,
            `\\(25\\sqrt{3}\\)`,
            `\\(15\\sqrt{5}\\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals without Variables*/
        q: `Simplify \\(\\sqrt{48}\\)`,
        options: [
            `\\(4\\sqrt{3}\\)`,
            `\\(16\\sqrt{3}\\)`,
            `\\(4\\sqrt{12}\\)`,
            `\\(2\\sqrt{12}\\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals without Variables*/
        q: `Simplify \\(\\sqrt[3]{81}\\)`,
        options: [
            `\\(3\\sqrt[3]{3}\\)`,
            `\\(9\\sqrt[3]{3}\\)`,
            `\\(3\\sqrt[3]{27}\\)`,
            `\\(27\\sqrt[3]{3}\\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals without Variables*/
        q: `Simplify \\(\\sqrt[3]{48}\\)`,
        options: [
            `\\(2\\sqrt[3]{6}\\)`,
            `\\(4\\sqrt[3]{6}\\)`,
            `\\(2\\sqrt[3]{2}\\)`,
            `\\(2\\sqrt[3]{8}\\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals without Variables*/
        q: `Simplify \\(\\sqrt[3]{48}\\)`,
        options: [
            `\\(2\\sqrt[3]{6}\\)`,
            `\\(4\\sqrt[3]{6}\\)`,
            `\\(2\\sqrt[3]{2}\\)`,
            `\\(2\\sqrt[3]{8}\\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{50x^2} \\)`,
        options: [
            `\\(5x\\sqrt{2}\\)`,
            `\\(5x\\sqrt{5}\\)`,
            `\\(5\\sqrt{2x}\\)`,
            `\\(25x\\sqrt{2}\\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{72y^3} \\)`,
        options: [
            `\\(6y\\sqrt{2y}\\)`,
            `\\(3y\\sqrt{8y}\\)`,
            `\\(36y\\sqrt{2y}\\)`,
            `\\(6y^2\\sqrt{2y}\\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{128z^4} \\)`,
        options: [
            `\\(8z^2\\sqrt{2}\\)`,
            `\\(8z\\sqrt{2}\\)`,
            `\\(16z\\sqrt{2z}\\)`,
            `\\(16z^2\\sqrt{2}\\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{18a^5} \\)`,
        options: [
            `\\(3a^2\\sqrt{2a}\\)`,
            `\\(3a^4\\sqrt{2a}\\)`,
            `\\(3a^2\\sqrt{2a^2}\\)`,
            `\\(9a^2\\sqrt{2a}\\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{32b^6} \\)`,
        options: [
            `\\(4b^3\\sqrt{2}\\)`,
            `\\(4b^2\\sqrt{2}\\)`,
            `\\(4b^2\\sqrt{2b}\\)`,
            `\\(8b^2\\sqrt{2b}\\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{45c^2d^3} \\)`,
        options: [
            `\\(3cd\\sqrt{5d} \\)`,
            `\\(3cd^2\\sqrt{5d} \\)`,
            `\\(9cd^2\\sqrt{5d} \\)`,
            `\\(9cd\\sqrt{5d} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{80m^7n^2} \\)`,
        options: [
            `\\( 4m^3n\\sqrt{5m} \\)`,
            `\\( 4m^3n\\sqrt{5m^2} \\)`,
            `\\( 16m^3n\\sqrt{5m^2} \\)`,
            `\\( 16m^3n\\sqrt{5m} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{98x^4y^2} \\)`,
        options: [
            `\\(7x^2y\\sqrt{2} \\)`,
            `\\(7xy\\sqrt{2x} \\)`,
            `\\(49x^2y\\sqrt{2} \\)`,
            `\\(49x^2y\\sqrt{2x} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{200a^3b^4} \\)`,
        options: [
            `\\(10ab^2\\sqrt{2a} \\)`,
            `\\(10a^2b^2\\sqrt{2a} \\)`,
            `\\(5a^2b^2\\sqrt{8a} \\)`,
            `\\(5ab^2\\sqrt{8a} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{300x^5y^6} \\)`,
        options: [
            `\\(10x^2y^3\\sqrt{3x} \\)`,
            `\\(10x^2y^3\\sqrt{3xy} \\)`,
            `\\(10x^4y^3\\sqrt{3xy} \\)`,
            `\\(10x^4y^3\\sqrt{3x} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{x^4} \\)`,
        options: [
            `\\( x^2 \\)`,
            `\\( x^4 \\)`,
            `\\( x^8 \\)`,
            `\\( x^2\\sqrt{x} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt[3]{x^9} \\)`,
        options: [
            `\\( x^3 \\)`,
            `\\( x^6 \\)`,
            `\\( x^3\\sqrt{x} \\)`,
            `\\( x^3\\sqrt{x^3} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt[3]{27x^6} \\)`,
        options: [
            `\\( 3x^2 \\)`,
            `\\( 3x^3 \\)`,
            `\\( 3x^2\\sqrt{x} \\)`,
            `\\( 3x^2\\sqrt{3x} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt[3]{54x^3} \\) `,
        options: [
            `\\( 3x\\sqrt[3]{2} \\)`,
            `\\( 3\\sqrt[3]{2x} \\)`,
            `\\( 9\\sqrt[3]{2x} \\)`,
            `\\( 9x\\sqrt[3]{2} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt[3]{125x^9} \\)`,
        options: [
            `\\( 5x^3 \\)`,
            `\\( 25x^3 \\)`,
            `\\( 25x^3\\sqrt{x} \\)`,
            `\\( 25x^3\\sqrt[3]{x} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt[3]{500x^7} \\)`,
        options: [
            `\\( 10x^2\\sqrt[3]{5x} \\)`,
            `\\( 10x^2\\sqrt[3]{5} \\)`,
            `\\( 5x^2\\sqrt[3]{5} \\)`,
            `\\( 5x^2\\sqrt[3]{5x} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{125n} \\)`,
        options: [
            `\\( 5\\sqrt{5n} \\)`,
            `\\( 5n\\sqrt{5} \\)`,
            `\\( 25\\sqrt{5n} \\)`,
            `\\( 5\\sqrt{10n} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{216w} \\)`,
        options: [
            `\\( 6\\sqrt{6w} \\)`,
            `\\( 6w\\sqrt{6} \\)`,
            `\\( 6\\sqrt{3w} \\)`,
            `\\( 36\\sqrt{6w} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{512k^2} \\)`,
        options: [
            `\\( 16k\\sqrt{2} \\)`,
            `\\( 16k\\sqrt{3} \\)`,
            `\\( 8k\\sqrt{16k} \\)`,
            `\\( 8k\\sqrt{8} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{512n^3} \\)`,
        options: [
            `\\( 16n\\sqrt{2n} \\)`,
            `\\( 16n\\sqrt{2} \\)`,
            `\\( 16n^2\\sqrt{2n} \\)`,
            `\\( 8n\\sqrt{8n} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{216k^4} \\)`,
        options: [
            `\\( 6k^2\\sqrt{6} \\)`,
            `\\( 6k^2\\sqrt{6k} \\)`,
            `\\( 36k^2\\sqrt{6} \\)`,
            `\\( 36k^2\\sqrt{6k} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{100z^3} \\)`,
        options: [
            `\\( 10z\\sqrt{z} \\)`,
            `\\( 10z^2\\sqrt{z} \\)`,
            `\\( 10z^2\\sqrt{10z} \\)`,
            `\\( 10z\\sqrt{10z} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{80m^3} \\)`,
        options: [
            `\\( 4m\\sqrt{5m} \\)`,
            `\\( 4m\\sqrt{5} \\)`,
            `\\( 4m^2\\sqrt{5m} \\)`,
            `\\( 16m\\sqrt{5m} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{45y^2} \\)`,
        options: [
            `\\( 3y\\sqrt{5} \\)`,
            `\\( 3y\\sqrt{3} \\)`,
            `\\( 9y\\sqrt{3} \\)`,
            `\\( 9y\\sqrt{5} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{147a^3b^3} \\)`,
        options: [
            `\\( 7ab\\sqrt{3ab} \\)`,
            `\\( 7ab\\sqrt{3a^b^2} \\)`,
            `\\( 7a^b^2\\sqrt{3ab} \\)`,
            `\\( 49ab\\sqrt{3ab} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{200p^4q} \\)`,
        options: [
            `\\( 10p^2\\sqrt{2q} \\)`,
            `\\( 10p^2\\sqrt{2pq} \\)`,
            `\\( 10p^2\\sqrt{q} \\)`,
            `\\( 10p\\sqrt{2q} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{75y^2z} \\)`,
        options: [
            `\\( 5y\\sqrt{3z} \\)`,
            `\\( 5y\\sqrt{3yz} \\)`,
            `\\( 5yz\\sqrt{3} \\)`,
            `\\( 5yz\\sqrt{3y} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{48x^3} \\)`,
        options: [
            `\\( 4x\\sqrt{3x} \\)`,
            `\\( 4x\\sqrt{3} \\)`,
            `\\( 4x^2\\sqrt{3x} \\)`,
            `\\( 16x\\sqrt{3x} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{112x^3} \\)`,
        options: [
            `\\( 4x\\sqrt{7x} \\)`,
            `\\( 4x^2\\sqrt{7x} \\)`,
            `\\( 4x^2\\sqrt{7} \\)`,
            `\\( 4x\\sqrt{7} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{48n^4} \\)`,
        options: [
            `\\( 4n^2\\sqrt{3} \\)`,
            `\\( 4n^2\\sqrt{3n^2} \\)`,
            `\\( 4n^4\\sqrt{3} \\)`,
            `\\( 16n^2\\sqrt{3} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{63m^4} \\)`,
        options: [
            `\\( 3m^2\\sqrt{7} \\)`,
            `\\( 3m^4\\sqrt{7} \\)`,
            `\\( 9m^2\\sqrt{7} \\)`,
            `\\( 9m^2\\sqrt{7m} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{27p} \\)`,
        options: [
            `\\( 3\\sqrt{3p} \\)`,
            `\\( 3p\\sqrt{3} \\)`,
            `\\( 9\\sqrt{3p} \\)`,
            `\\( 9p\\sqrt{3} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{28x} \\)`,
        options: [
            `\\( 2\\sqrt{7x} \\)`,
            `\\( 4\\sqrt{7x} \\)`,
            `\\( 2x\\sqrt{7} \\)`,
            `\\( 4x\\sqrt{7} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{28b^2} \\)`,
        options: [
            `\\( 2b\\sqrt{7} \\)`,
            `\\( 4b\\sqrt{7} \\)`,
            `\\( 2b\\sqrt{7b} \\)`,
            `\\( 2b^2\\sqrt{7} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{12n^2} \\)`,
        options: [
            `\\( 2n\\sqrt{3} \\)`,
            `\\( 4n\\sqrt{3} \\)`,
            `\\( 2n\\sqrt{3n} \\)`,
            `\\( 2n^2\\sqrt{3} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{16r^3} \\)`,
        options: [
            `\\( 4r\\sqrt{r} \\)`,
            `\\( 4r^2\\sqrt{r} \\)`,
            `\\( 4r\\sqrt{2r} \\)`,
            `\\( 8r\\sqrt{r} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt{448x^3} \\)`,
        options: [
            `\\( 8x\\sqrt{7x} \\)`,
            `\\( 8x\\sqrt{7} \\)`,
            `\\( 8x^2\\sqrt{7x} \\)`,
            `\\( 64x\\sqrt{7x} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt[7]{512x^2} \\)`,
        options: [
            `\\( 2\\sqrt[7]{4x^2} \\)`,
            `\\( 4\\sqrt[7]{4x^2} \\)`,
            `\\( 2\\sqrt[7]{2x^2} \\)`,
            `\\( 8\\sqrt[7]{4x^2} \\)`,
        ],
        answer: 0,
    },
    {
        /* Simplifying Radicals with Variables*/
        q: `Simplify \\( \\sqrt[4]{80x^7} \\)`,
        options: [
            `\\( 2x\\sqrt[4]{5x^3} \\)`,
            `\\( 2x\\sqrt[4]{5x} \\)`,
            `\\( 4x\\sqrt[4]{5x^3} \\)`,
            `\\( 4x^2\\sqrt[4]{5x^3} \\)`,
        ],
        answer: 0,
    },
];
