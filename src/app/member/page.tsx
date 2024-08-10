import React from 'react';

export default function FacilityManagement() {
    // Dummy data for now; will be replaced with props later
    const dummyData = {
        personalDetails: {
            name: "John Doe",
            age: 85,
            gender: "Male",
        },
        carePlans: [
            {
                date: "2024-08-01",
                plan: "Daily physiotherapy and a balanced diet",
            },
            {
                date: "2024-08-02",
                plan: "Weekly mental health check-up and light exercises",
            },
        ],
        medications: [
            {
                name: "Aspirin",
                dosage: "100mg daily",
            },
            {
                name: "Metformin",
                dosage: "500mg twice daily",
            },
        ],
        familyContacts: [
            {
                relation: "Son",
                name: "Michael Doe",
                contact: "+61 400 000 000",
            },
            {
                relation: "Daughter",
                name: "Emily Doe",
                contact: "+61 400 000 001",
            },
        ],
        accessibilityRequirements: [
            "Wheelchair access required",
            "Room on ground floor",
        ],
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-4">
            <h1 className="text-4xl mb-4 mt-4">Member Management Page</h1>


            <table className="table-auto w-full text-left">
                <thead>
                <tr>
                    <th className="px-4 py-2 text-2xl font-bold">Category</th>
                    <th className="px-4 py-2 text-2xl font-bold">Details</th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-gray-100">
                    <td className="border px-4 py-2 font-bold">Personal Details</td>
                    <td className="border px-4 py-2">
                        <p>Name: {dummyData.personalDetails.name}</p>
                        <p>Age: {dummyData.personalDetails.age}</p>
                        <p>Gender: {dummyData.personalDetails.gender}</p>
                    </td>
                </tr>

                <tr>
                    <td className="border px-4 py-2 font-bold">Care Plans</td>
                    <td className="border px-4 py-2">
                        <ul>
                            {dummyData.carePlans.map((plan, index) => (
                                <li key={index}>
                                    <strong>Date:</strong> {plan.date} - <strong>Plan:</strong> {plan.plan}
                                </li>
                            ))}
                        </ul>
                    </td>
                </tr>

                <tr className="bg-gray-100">
                    <td className="border px-4 py-2 font-bold">Medication Tracking</td>
                    <td className="border px-4 py-2">
                        <ul>
                            {dummyData.medications.map((medication, index) => (
                                <li key={index}>
                                    <strong>Name:</strong> {medication.name} - <strong>Dosage:</strong> {medication.dosage}
                                </li>
                            ))}
                        </ul>
                    </td>
                </tr>

                <tr>
                    <td className="border px-4 py-2 font-bold">Family Contacts</td>
                    <td className="border px-4 py-2">
                        <ul>
                            {dummyData.familyContacts.map((contact, index) => (
                                <li key={index}>
                                    <strong>Relation:</strong> {contact.relation} - <strong>Name:</strong> {contact.name} - <strong>Contact:</strong> {contact.contact}
                                </li>
                            ))}
                        </ul>
                    </td>
                </tr>

                <tr className="bg-gray-100">
                    <td className="border px-4 py-2 font-bold">Accessibility Requirements</td>
                    <td className="border px-4 py-2">
                        <ul>
                            {dummyData.accessibilityRequirements.map((requirement, index) => (
                                <li key={index}>{requirement}</li>
                            ))}
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        </main>
    );
}