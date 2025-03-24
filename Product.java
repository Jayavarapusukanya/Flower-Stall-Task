package com.wealthzone.www.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private double price;
    private String tag;
    private String image; // New field for image

    // Constructors
    public Product() {}

    public Product(int id, String name, double price, String tag, String image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.tag = tag;
        this.image = image;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public String getTag() { return tag; }
    public void setTag(String tag) { this.tag = tag; }

    public String getImage() { return image; }  // ✅ Fixed getter
    public void setImage(String image) { this.image = image; }  // ✅ Fixed setter
}
