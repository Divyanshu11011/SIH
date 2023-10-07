/* global web3 */
import "./Verify.css";
import React, { useEffect } from 'react';
import Web3 from 'web3'; // Import Web3 if not already imported
import $ from 'jquery'; // Import jQuery if not already imported

function YourReactComponent() {
  useEffect(() => {
    window.CONTRACT = {
      address: '0x5363E4025A7DA12A9f50666a307a09A7CC849F74',
      network: 'https://rpc-mumbai.maticvigil.com/',
      explore: 'https://mumbai.polygonscan.com/',
      abi: [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "_exporter",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "_ipfsHash",
                "type": "string"
              }
            ],
            "name": "addHash",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
              },
              {
                "internalType": "string",
                "name": "_ipfs",
                "type": "string"
              }
            ],
            "name": "addDocHash",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_add",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "_info",
                "type": "string"
              }
            ],
            "name": "add_Exporter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_add",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "_newInfo",
                "type": "string"
              }
            ],
            "name": "alter_Exporter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_newOwner",
                "type": "address"
              }
            ],
            "name": "changeOwner",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "count_Exporters",
            "outputs": [
              {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "count_hashes",
            "outputs": [
              {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "bytes32",
                "name": "_hash",
                "type": "bytes32"
              }
            ],
            "name": "deleteHash",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_add",
                "type": "address"
              }
            ],
            "name": "delete_Exporter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "bytes32",
                "name": "_hash",
                "type": "bytes32"
              }
            ],
            "name": "findDocHash",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_add",
                "type": "address"
              }
            ],
            "name": "getExporterInfo",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "owner",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
      ],
    };

    const web3 = new Web3(new Web3.providers.HttpProvider(window.CONTRACT.network));
    const contract = new web3.eth.Contract(
      window.CONTRACT.abi,
      window.CONTRACT.address,
    );

    const verify_Hash = async () => {
      $('#loader').show();
      if (window.hashedfile) {
        await contract.methods
          .findDocHash(window.hashedfile)
          .call({ from: window.userAddress })
          .then((result) => {
            console.log(result);
            $('.transaction-status').removeClass('d-none');
            window.newHash = result;
            if (result[0] !== 0 && result[1] !== 0) {
              print_info(result, true);
            } else {
              print_info(result, false);
            }
          });
      }
    };

    const checkURL = () => {
      let url_string = window.location.href;
      let url = new URL(url_string);
      window.hashedfile = url.searchParams.get('hash');
      if (!window.hashedfile) return;

      verify_Hash();
    };

    // Rest of your JavaScript code...

    // Event listener for file input change
    $('#doc-file').on('change', get_Sha3);

    // Call checkURL when the component mounts
    checkURL();

    // Cleanup code here (if necessary)
    return () => {
      // Remove event listeners or subscriptions if needed
    };
  }, []);

  const get_Sha3 = async () => {
    $('#note').html(`<h5 class="text-warning">Hashing Your Document 😴...</h5>`);
    $('#upload_file_button').attr('disabled', false);
    console.log('file changed');
    var file = await document.getElementById('doc-file').files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = async function (evt) {
        window.hashedfile = await web3.utils.soliditySha3(evt.target.result);
        console.log(`Document Hash : ${window.hashedfile}`);
        $('#note').html(
          `<h5 class="text-center text-info">Document Hashed  😎 </h5>`,
        );
      };
      reader.onerror = function (evt) {
        console.log('error reading file');
        return false;
      };
    } else {
      window.hashedfile = null;
      return false;
    }
  };

  const print_info = (result, is_verified) => {
    // Default Image for not Verified Documents
    document.getElementById('student-document').src = './files/notvalid.svg';
    $('#loader').hide();
    // when document not verified
    if (!is_verified) {
      $('#download-document').hide();
      $('#doc-status').html(`<h3 class="text-danger">
        Certificate not Verified 😕
        <i class="text-danger  fa fa-times-circle" aria-hidden="true"></i>
        </h3>`);
      $('#file-hash').html(
        `<span class="text-info"><i class="fa-solid fa-hashtag"></i></span> ${truncateAddress(
          window.hashedfile,
        )}`,
      );
      $('#college-name').hide();
      $('#contract-address').hide();
      $('#time-stamps').hide();
      $('#blockNumber').hide();
      $('.transaction-status').show();
    } else {
      $('#download-document').show();
      $('#college-name').show();
      $('#contract-address').show();
      $('#time-stamps').show();
      $('#blockNumber').show();

      var t = new Date(1970, 0, 1);
      t.setSeconds(result[1]);
      t.setHours(t.getHours() + 3);

      $('#loader').hide();
      $('#doc-status').html(`<h3 class="text-info">
        Certificate Verified Successfully 😊
        <i class="text-info fa fa-check-circle" aria-hidden="true"></i>
        </h3>`);
      $('#file-hash').html(
        `<span class="text-info"><i class="fa-solid fa-hashtag"></i></span> ${truncateAddress(
          window.hashedfile,
        )}`,
      );
      $('#college-name').html(
        `<span class="text-info"><i class="fa-solid fa-graduation-cap"></i></span> ${result[2]}`,
      );
      $('#contract-address').html(
        `<span class="text-info"><i class="fa-solid fa-file-contract"></i> </span>${truncateAddress(
          window.CONTRACT.address,
        )}`,
      );
      $('#time-stamps').html(
        `<span class="text-info"><i class="fa-solid fa-clock"></i> </span>${t}`,
      );
      $('#blockNumber').html(
        `<span class="text-info"><i class="fa-solid fa-cube"></i></span> ${result[0]}`,
      );
      document.getElementById('student-document').src =
        'https://ipfs.io/ipfs/' + result[3];
      document.getElementById('download-document').href = document.getElementById(
        'student-document',
      ).src;
      $('.transaction-status').show();
    }
  };

  const truncateAddress = (address) => {
    if (!address) {
      return;
    }
    return `${address.substr(0, 7)}...${address.substr(
      address.length - 8,
      address.length,
    )}`;
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      {/* Your React component's JSX */}
    </div>
  );
}

export default YourReactComponent;
