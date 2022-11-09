// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/** 
 * @title Ballot
 * @dev Implements voting process along with vote delegation
 */
contract Medical {
    address public admin;

    struct MedicalRecord {
        address patientAddress;
        string name;
        string dob;
        string weight;
        string height;
        string otherIllness;
        string gender;
        string reason;
        string allergies;
        string medications;
    }

    MedicalRecord[] public medicalRecords;

    constructor() {
        admin = msg.sender;
    }

    function saveMedicalRecords(
        string memory name, 
        string memory dob, 
        string memory weight, 
        string memory height, 
        string memory otherIllness, 
        string memory gender, 
        string memory reason, 
        string memory allergies, 
        string memory medications
        ) public {

            medicalRecords.push(MedicalRecord({
                patientAddress: msg.sender,
                name: name,
                dob: dob,
                weight: weight,
                height: height,
                otherIllness: otherIllness,
                gender: gender,
                reason: reason,
                allergies: allergies,
                medications: medications
            }));
    }

    function getMedicalRecord(string memory patientName) public view restricted returns(MedicalRecord memory) {
        for(uint i = 0; i < medicalRecords.length; i++) {
            if (keccak256(abi.encodePacked(medicalRecords[i].name)) == keccak256(abi.encodePacked(patientName))) {
                //MedicalRecord storage requiredRecord = medicalRecords[i];
                return medicalRecords[i];
            }
        }
    }

    modifier restricted() {
        require(msg.sender == admin, "Authentication Required!");
        _;
    }
}