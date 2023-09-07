const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3001;

app.get('/proxy-api', async (req, res) => {
  try {
    const config = {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json;charset=UTF-8',
        'Cookie': 'cookiesession1=678B2869V0123456789891234ABCA31E',
        'Origin': 'https://cekdptonline.kpu.go.id',
        'Pragma': 'no-cache',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
      },
    };

    var raw = "{\n    \"query\": \"\\n                {\\n                  findNikSidalih (\\n                      nik:\\\"1275030308950005\\\",\\n                      wilayah_id:0,\\n                      token:\\\"0DUVZwASpa1MA0bZtte125gf4UkDbGhhM21xk1Z-hsB7O7eeJpckuInr3NkPy2scvxnaRmVihypFG1l3efeZ3bsXg5xthet0JbJqbPNGe4PRq1ypJ3GbdRKVhs83dSUDdROnUFyKzwbqneQ6AV5gfqIPQiDCwqpct_CpANmKg4Hbu79I_od-4B7eXtuAvGzNum13676MZvQhVSyyomk6hfky0d22pVfBI7BbDl3KA7rKfGhPzQYJFSTnQ_LE9DO-3mPuH5Q4h13lwG7XqP4hZqV7NeVkmyFwbUqhbXPTsNJai3-l4BbLI6QFP5gnj2JviN_31AUP9-dDUccPY6rrtD7SPzJUQjZ3y9wy8-I_1_LWDfA9UO4GsG3IeNzAjeyVqqOox-hqsj5AYlWOT1GgaR6nSyoFrXm7iiQxksSHAK-6i7nIV71f7FNiEwFrSPhJjUNd6-SuTmX4ITTJgONVymzz4oSmfyhnbIsAokbUIzMvJppcpiypd_mX1Hr9DMciVizWX2_7UpC93GOSmBna9EK-IWbAf0KlHCZxe9u9v1JvTDMAVsVKcbQ\\\",\\n                    ){\\n                    nama,\\n                    nik,\\n                    nkk,\\n                    jenis_kelamin,\\n                    provinsi,\\n                    kabupaten,\\n                    kecamatan,\\n                    kelurahan,\\n                    tps,\\n                    lhp {\\n                          nama,\\n                          nik,\\n                          nkk,\\n                          jenis_kelamin,\\n                          kecamatan,\\n                          kelurahan,\\n                          tps,\\n                          id,\\n                          flag,\\n                          source\\n                    }\\n                  }\\n                }\\n              \"\n}";
    const response = await axios.post("https://cekdptonline.kpu.go.id/apilhp", raw, config);
    res.status(response.status).json(response.data);
  } catch (error) {
    // Handle errors, such as when the blocked API is unreachable
    console.error('Error proxying request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
