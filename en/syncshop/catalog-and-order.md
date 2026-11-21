---
title: "SyncShop: Product Catalog and Order Logistics Management"
sidebarTitle: "Catalog & Order Management"
description: "Specification for SyncShop's hierarchical catalog, SKU inventory locking, full-lifecycle order state transitions, and return/refund review workflow"
head:
  - - meta
    - name: keywords
      content: SyncShop, Product Management, PMS, Order Management, OMS, Inventory Lock, SKU, Returns and Refunds, Fulfillment Center
sort: 3
---

# Product Catalog and Order Logistics Management

SyncShop's Product Management System (PMS) and Order Management System (OMS) are engineered to guarantee data consistency and high throughput in large-scale e-commerce operations.

---

## 1. Product Catalog Management (PMS)

```mermaid
graph TD
    Category["Hierarchical Categories<br/>(Unlimited Depth)"] --> Product["Base Product (Spu)"]
    Brand["Brand Asset Management"] --> Product
    Template["Attribute Templates<br/>(Material, Country of Origin, etc.)"] --> Product
    Product --> Sku1["SKU #1<br/>(Black / S / Stock 50)"]
    Product --> Sku2["SKU #2<br/>(Black / M / Stock 80)"]
    Product --> Sku3["SKU #3<br/>(White / L / Stock 30)"]
```

### 1.1 Hierarchical Categories and Brands
* **Unlimited Hierarchy**: Supports multi-level categories spanning major, medium, and minor classifications, dynamically recalculating downstream mappings when a parent category changes.
* **Brand Asset Management**: Manages logos, brand stories, and official certification status, integrating directly with brand-dedicated storefront curations.

### 1.2 Dynamic SKUs and Inventory Lock
* **SKU Separation by Option Combination**: Assigns a unique SKU code, individual selling price, and safety stock quantity for each combination of options such as color, size, and capacity.
* **Inventory Lock Mechanism**: When a user enters the order checkout stage, inventory is temporarily reserved (locked) using a Redis distributed lock, and physical stock is deducted upon payment completion. If payment fails or times out (default 15 minutes), the reservation is automatically released immediately.

---

## 2. Order and Logistics Management (OMS)

### 2.1 Order State Transition Lifecycle

```mermaid
stateDiagram-v2
    state "Pending Payment" as PendingPayment
    state "Order Cancelled" as OrderCancelled
    state "Payment Completed" as PaymentCompleted
    state "Preparing Shipment" as PreparingShipment
    state "In Transit" as InTransit
    state "Delivered" as Delivered
    state "Purchase Confirmed" as PurchaseConfirmed
    state "Cancellation Requested" as CancellationRequested
    state "Cancellation Completed" as CancellationCompleted
    state "Return Requested" as ReturnRequested
    state "Return Inspection" as ReturnInspection
    state "Return Completed" as ReturnCompleted

    [*] --> PendingPayment: Order Created
    PendingPayment --> OrderCancelled: Unpaid Timeout
    PendingPayment --> PaymentCompleted: PG Payment Approved
    PaymentCompleted --> PreparingShipment: Product Packing & Tracking Assigned
    PreparingShipment --> InTransit: Carrier Pickup Completed
    InTransit --> Delivered: Customer Receipt Confirmed
    Delivered --> PurchaseConfirmed: Customer or Auto-Confirmed (7 Days)

    PaymentCompleted --> CancellationRequested: Order Cancellation Requested
    CancellationRequested --> CancellationCompleted: Refund Approved

    Delivered --> ReturnRequested: Return Requested
    ReturnRequested --> ReturnInspection: Warehouse Receipt & Inspection
    ReturnInspection --> ReturnCompleted: Final Refund Issued
```

### 2.2 Core Order Processing Features
* **Automated Bulk Tracking Registration**: Binds tracking numbers in bulk and transitions orders to the In Transit state in batches via Excel uploads and carrier API integrations.
* **Two-Stage Return/Refund Review**: Separates physical return receipt inspection from refund approval after a customer submits a return request, preventing erroneous payouts.
* **Fulfillment Center Management**: Registers multiple logistics warehouses (e.g., Gangnam, Songpa, Pangyo) and assigns the optimal shipping hub when an order arrives.

---

## 3. Related Admin Screen Code Mapping

| Functional Area | Screen ID | Vue Component Path | Description |
|:---|:---|:---|:---|
| **Catalog Search** | `SHOP-02` | `src/views/pms/product/index.vue` | Product list search, display status toggle, dynamic price adjustment |
| **New Product Registration** | `SHOP-03` | `src/views/pms/product/add.vue` | Basic info, SKU matrix configuration, attribute template entry |
| **Categories & Brands** | `SHOP-04` | `src/views/pms/productCate/index.vue` | Tree-based category organization and brand list management |
| **Order & Shipping Control** | `SHOP-05` | `src/views/oms/order/index.vue` | Real-time order intake, tracking processing, delivery tracking |
| **Return & Refund Review** | `SHOP-06` | `src/views/oms/orderReturnApply/index.vue` | Return reason review, logistics status check, refund approval |
