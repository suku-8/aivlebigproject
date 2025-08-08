package aivlebigproject.domain;

import aivlebigproject.domain.*;
import aivlebigproject.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class CustomerRegistered extends AbstractEvent {

    private Long customerId;
    private String name;
    private Integer age;
    private String phone;
    private String job;
    private String address;
    private String gender;
    private Date birthOfDate;
    private Boolean hasChildren;
    private Boolean isMarried;
    private String rrn;

    public CustomerRegistered(CustomerProfile aggregate) {
        super(aggregate);
    }

    public CustomerRegistered() {
        super();
    }
}
//>>> DDD / Domain Event
