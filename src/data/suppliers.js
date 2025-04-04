const suppliers = [
    {
      id: 1,
      name: "X Supplies",
      email: "contact@xsupplies.com",
      phone: "123-456-7890",
      avatar: "https://i.pravatar.cc/150?img=11",
      overview: {
        status: "Active",
        website: "https://xsupplies.com",
        founded: "2010",
        industry: "Logistics"
      },
      business: {
        totalSpend: "$250,000",
        categories: ["Packaging", "Shipping"]
      },
      locations: [
        {
          name: "Head Office",
          address: "123 Main Street, New York, NY"
        },
        {
          name: "Warehouse",
          address: "456 Warehouse Rd, Brooklyn, NY"
        }
      ],
      contacts: [
        {
          name: "Jane Doe",
          role: "Account Manager",
          email: "jane@xsupplies.com"
        },
        {
          name: "John Smith",
          role: "Support",
          email: "john@xsupplies.com"
        }
      ]
    },
    {
      id: 2,
      name: "Y Traders",
      email: "info@ytraders.io",
      phone: "987-654-3210",
      avatar: "https://i.pravatar.cc/150?img=12",
      overview: {
        status: "Active",
        website: "https://ytraders.io",
        founded: "1996",
        industry: "Trade"
      },
      business: {
        totalSpend: "$150,000",
        categories: ["Raw Materials", "Machinery"]
      },
      locations: [
        {
          name: "Main Branch",
          address: "789 Commerce Blvd, Chicago, IL"
        }
      ],
      contacts: [
        {
          name: "Martin Wills",
          role: "Account Manager",
          email: "martin@ytraders.io"
        },
        {
          name: "Alan Jew",
          role: "Support",
          email: "alan@ytraders.io"
        }
      ]
    },
    {
      id: 3,
      name: "Z Distributors",
      email: "sales@zdist.com",
      phone: "555-777-9999",
      avatar: "https://i.pravatar.cc/150?img=13",
      overview: {
        status: "Active",
        website: "https://zdist.com",
        founded: "2021",
        industry: "Sales"
      },
      business: {
        totalSpend: "$100,000",
        categories: ["Electronics"]
      },
      locations: [
        {
            name: "HQ",
            address: "321 Industrial Park, Los Angeles, CA"
        },
        {
            name: "West Coast Office",
            address: "654 Sunset Blvd, San Diego, CA"
        }
      ],
      contacts: [
        {
          name: "Graham Miller",
          role: "Account Manager",
          email: "graham@zdist.com"
        },
        {
          name: "Joe Smith",
          role: "Support",
          email: "joe@zdist.com"
        }
      ]
    }
  ];
  
  export default suppliers;
  