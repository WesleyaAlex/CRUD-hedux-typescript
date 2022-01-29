import React from "react"
import { Grid, ListItem, List, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core'
import { AccountCircle, Delete, Feedback } from '@material-ui/icons'
import { Contact } from '../../store/interfaces/Contact'
import './index.css'

interface ContactsListProps {
    list: Contact[];
    onDelete: (contact: Contact) => void;
}

export const ContactsList: React.FC<ContactsListProps> = ({ list, onDelete } : ContactsListProps) => {
    return (
        <>
            <Grid container>
                <Grid item xs={12} className="grid-item">
                    <List className="full-width">
                        {list.map((contact: Contact) => (
                            <ListItem key={contact.id} className="list-item">
                                <ListItemAvatar>
                                    <Avatar>
                                        <AccountCircle />
                                    </Avatar>
                                </ListItemAvatar>

                                <ListItemText primary={contact.name} secondary={`Idade: ${contact.age}`} />

                                <ListItemSecondaryAction>
                                    <IconButton edge="end" onClick={() => onDelete(contact)}>
                                        <Delete />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                        {list.length === 0 &&
                            <div className="div-list">
                                <h1>Lista vazia! </h1>
                                <Feedback style={{ marginLeft: 10 }} />
                            </div>
                        }
                    </List>
                </Grid>
            </Grid>
        </>
    )
}