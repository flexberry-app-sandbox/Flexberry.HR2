package HR.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HR.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Анкета
 */
@Entity(name = "IISHRАнкета")
@Table(schema = "public", name = "Анкета")
public class Anketa {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "ЛК")
    private String лк;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Vakansiya")
    @Convert("Vakansiya")
    @Column(name = "Вакансия", length = 16, unique = true, nullable = false)
    private UUID _vakansiyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Vakansiya", insertable = false, updatable = false)
    private Dolzhnost vakansiya;


    public Anketa() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public String getЛК() {
      return лк;
    }

    public void setЛК(String лк) {
      this.лк = лк;
    }


}